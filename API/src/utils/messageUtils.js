function formatErrorMessage(errorMessageConstant, errorMessage){
   return `${errorMessageConstant} ${errorMessage}`;
}

function formatInvalidDataResponse(errorMessage, invalidRows) {
   return { message: errorMessage, ...invalidRows };
}

module.exports = { formatErrorMessage, formatInvalidDataResponse };