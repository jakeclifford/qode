## qode.design

#### App build 

The App is built with react and uses SCSS for styling, the site is hosted on vercel

The app is designed to be a quick and easy way to generate custom QR codes, and apply these Qr codes to a range of designs including business cards and stickers 

#### Version control

The app has 2 main branches, the master branch used for production and the working branch for development. Extra branches may be added for complex features or experimentation

#### Chalenges

1. Editing QR Code color - The QR code is recived as a url from the API which makes it challenging to edit the image directly as this would require an inline SVG. To solve the problem the image needed to be store in a tempory container that allows the SVG to be stored inline
2. Scaling of the QR code accros designs created misalignment of elements - tempory fix by adding margins at different screen sizes
3. 
