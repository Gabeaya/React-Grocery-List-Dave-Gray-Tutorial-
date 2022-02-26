//This component is responsible for handling predefined crud actions within app.js
const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error ('Please reload the app');
  } catch (err) {
    errMsg= err.message;
  } finally {
    return errMsg;
  }

}

export default apiRequest;