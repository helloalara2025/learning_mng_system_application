/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║                         LAB 5 - Express Exercises                         ║
 * ║                            Created by Alara                               ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 * 
 * These are my Lab 5 exercises from the course - practicing Express.js basics!
 */

let assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2024-10-10",
  completed: false,
  score: 0,
};

const module = {
  id: "M101",
  name: "Introduction to Rocket Propulsion",
  description: "Basic principles of rocket propulsion",
  course: "RS101",
};

export default function Lab5Routes(app) {
  
  // ═══════════════════════════════════════════════════════════════════════
  // BASIC ROUTES
  // ═══════════════════════════════════════════════════════════════════════
  
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5 - Created by Alara");
  });

  // ═══════════════════════════════════════════════════════════════════════
  // CALCULATOR ROUTES
  // ═══════════════════════════════════════════════════════════════════════

  app.get("/lab5/add/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.json({ result: parseInt(a) + parseInt(b) });
  });

  app.get("/lab5/subtract/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.json({ result: parseInt(a) - parseInt(b) });
  });

  app.get("/lab5/multiply/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.json({ result: parseInt(a) * parseInt(b) });
  });

  app.get("/lab5/divide/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.json({ result: parseInt(a) / parseInt(b) });
  });

  // ═══════════════════════════════════════════════════════════════════════
  // ASSIGNMENT ROUTES
  // ═══════════════════════════════════════════════════════════════════════

  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });

  app.get("/lab5/assignment/title", (req, res) => {
    res.json({ title: assignment.title });
  });

  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    assignment.title = req.params.newTitle;
    res.json(assignment);
  });

  app.get("/lab5/assignment/score/:newScore", (req, res) => {
    assignment.score = parseInt(req.params.newScore);
    res.json(assignment);
  });

  app.get("/lab5/assignment/completed/:isCompleted", (req, res) => {
    assignment.completed = req.params.isCompleted === "true";
    res.json(assignment);
  });

  // ═══════════════════════════════════════════════════════════════════════
  // MODULE ROUTES
  // ═══════════════════════════════════════════════════════════════════════

  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });

  app.get("/lab5/module/name", (req, res) => {
    res.json({ name: module.name });
  });

  app.get("/lab5/module/name/:newName", (req, res) => {
    module.name = req.params.newName;
    res.json(module);
  });

  app.get("/lab5/module/description/:newDescription", (req, res) => {
    module.description = req.params.newDescription;
    res.json(module);
  });
}
