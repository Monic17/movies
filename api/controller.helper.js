async function controllerHelper({ event, validator, service }) {
  try {
    const parameters = await validator(event);
    const serviceResponse = await service(parameters);

    return { statusCode: 200, body: JSON.stringify(serviceResponse) };
  } catch ({ statusCode, message, error }) {
    return { statusCode, body: JSON.stringify({ error, message }) };
  }
}

module.exports = controllerHelper;
