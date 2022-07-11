/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = (emails) => {
  const refinedEmails = new Set();
  for (const email of emails) {
    const [unrefinedLocalName, domainName] = email.split('@');
    const [localNameWithDots] = unrefinedLocalName.split('+');
    const localName = localNameWithDots.split('.').join('');
    refinedEmails.add(`${localName}@${domainName}`);
  }
  return refinedEmails.size;
};
