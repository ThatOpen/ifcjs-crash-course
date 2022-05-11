function saveMail(mail) {
  console.log(mail);
}

function validateEmail(mail) {
  const gmailText = "@gmail.com";
  const isNotGmail = !mail.includes(gmailText);
  const isTooShort = mail.length < gmailText.length + 1;

  if (isNotGmail || isTooShort) {
    throw new Error("The mail must be a valid Google mail");
  }
}

function main() {
  const mail = prompt("Please, type in your gmail:");

  try {
    validateEmail(mail);
    saveMail(mail);
    alert("Email saved, thank you!");
  } catch (error) {
    alert(`An error ocurred: ${error}`);
  }
}

main();
