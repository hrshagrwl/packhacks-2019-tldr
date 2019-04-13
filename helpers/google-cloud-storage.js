  /**
   * Copy file from local to a GCS bucket.
   * Uploaded file will be made publicly accessible.
   *
   * @param {string} localFilePath
   * @param {string} bucketName
   * @param {Object} [options]
   * @return {Promise.<string>} - The public URL of the uploaded file.
   */
  const GoogleCloudStorage = require('@google-cloud/storage');
  
  const GOOGLE_CLOUD_PROJECT_ID = 'leafy-chariot-237517'; // Replace with your project ID
  const GOOGLE_CLOUD_KEYFILE = '../../credentials/google-api-key.json'; // Replace with the path to the downloaded private key
  const storage = GoogleCloudStorage({
    projectId: GOOGLE_CLOUD_PROJECT_ID,
    keyFilename: GOOGLE_CLOUD_KEYFILE,
  });
  exports.getPublicUrl = (bucketName, fileName) => `https://storage.googleapis.com/${bucketName}/${fileName}`;

  exports.copyFileToGCS = (localFilePath, bucketName, options) => {
	
    options = options || {};	
    const bucket = storage.bucket(bucketName);
    const fileName = path.basename(localFilePath);
    const file = bucket.file(fileName);
    return bucket.upload(localFilePath, options)
      .then(() => file.makePublic())
      .then(() => exports.getPublicUrl(bucketName, gcsName));
	
  };