export const sendEmail = (email, message) => {
  if (email) {
    alert(message.success);
  } else {
    alert(message.failed);
  }
};