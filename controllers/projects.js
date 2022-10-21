const getAllProjects = (req, res) => {
  res.send("プロジェクトを全て取得しました");
};
const createProject = (req, res) => {
  res.send("プロジェクトを新規作成しました");
};
const getSingleProject = (req, res) => {
  res.send("特定のプロジェクトを取得しました");
};
const updateProject = (req, res) => {
  res.send("特定のプロジェクトを更新しました");
};
const deleteProject = (req, res) => {
  res.send("特定のプロジェクトを削除しました");
};

module.exports = {
  getAllProjects,
  createProject,
  getSingleProject,
  updateProject,
  deleteProject,
};
