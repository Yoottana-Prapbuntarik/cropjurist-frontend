export const postDataToDatabase = (postData, message) => {
    console.log(`message`, message);
    if (postData) {
    alert(message.success);
  } else {
    alert(message.failed);
  }
};
