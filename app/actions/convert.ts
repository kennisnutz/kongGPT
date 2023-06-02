export default function convertToBase64(file: File) {
  const base64String = new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });

  return base64String;
}

// export function base64ToImage(base64String: string): HTMLImageElement | null {
//   // Check if the base64String is valid
//   if (!base64String || typeof base64String !== 'string') {
//     console.error('Invalid base64String');
//     return null;
//   }

//   // Check if the base64 header is present
//   const headerIndex = base64String.indexOf('base64,');
//   if (headerIndex !== -1) {
//     // Extract the base64 string without the header
//     base64String = base64String.substring(headerIndex + 7);
//   }

//   // Create a new image element
//   const image = new Image();

//   // Set the image source to the base64 string
//   image.src = 'data:image/png;base64,' + base64String;

//   return image;
// }
