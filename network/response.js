function success(req, res, message, status) {
  res.status(status || 200).send({
    error: '',
    body: message,
  });
}
function problem(req, res, message, status) {
  res.status(status || 500).send({
    error: message,
    body: '',
  });
}

module.exports = { success, problem };
