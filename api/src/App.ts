import * as express from "express";
import * as Project from "./project";
import * as Subproject from "./subproject";
import { authorize } from "./authz";

const app = express();

const router = express.Router();

// TODO of course :user doesn't belong here..
router.get("/:user/projects", (req, res) => {
  // Returns all projects the user is allowed to see
  const user = req.params.user;
  const projects = authorize(user, Project.list());
  res.json(projects);
});

// router.put("/:user/projects/:id", (req, res) => {
//   const user = req.params.user;
//   const title = req.body.title;
//   const projects = runIfAuthorized(user, Project.changeTitle(id, title));
//   res.json(projects);
// });

router.post("/:user/projects/:id/subprojects/:title", (req, res) => {
  // Create a subproject only if the user is allowed to:
  const user = req.params.user;
  const projectId = req.params.id;
  const title = req.params.title; // TODO ;-)
  const projects = authorize(user, Subproject.create(projectId, title));
  res.json(projects);
});

// router.get("/projects/:id/subprojects", (req, res) => {
//   const projectId = req.params.id;
//   // Lists all subprojects of a project the user is allowed to see:
//   const subProjects = Project.pick(projectId).listSubprojectsAs(user);
//   res.json(subProjects);
// });

// router.post("/projects/:projectId/subprojects/:id/workflows", (req, res) => {
//   const projectId = req.params.id;
//   // Lists all workflows of a subproject of a project the user is allowed to see:
//   const workflows = Project.pick(projectId).pickSubproject(id).listWorkflowsAs(user);
//   res.json(workflows);
// });

app.use("/", router);

export default app;