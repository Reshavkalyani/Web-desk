require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dnoz9j50w',
    api_key: 489611843899932,
    api_secret: 'cNhD-UC9GlI4r0M8E5k0al9DKAQ',
});

module.exports = { cloudinary };