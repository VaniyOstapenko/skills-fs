function isValidSkillId(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error('id должен быть число');
  if (id <= 0) throw new Error('id cannot be a negative number');

  next();
}

function isValidSkillData(req, res, next) {
  const { title } = req.body;
  if (!title) throw new Error('title is empty');
  if (!isNaN(title)) throw new Error('title не может быть число');

  next();
}

module.exports = { isValidSkillId, isValidSkillData };
