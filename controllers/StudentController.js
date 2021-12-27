const Students = require("../models/students");

class StudentController {
  async index(req, res) {
    const students = await Students.all();

    const response = {
      message: "Get all students",
      data: students,
    };

    res.json(response);
  }

  async store(req, res) {
    const student = await Students.create(req.body);

    const data = {
      message: "Add data student",
      data: student,
    };

    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    students.splice(id, 1, nama);

    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: students,
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    students.splice(id, 1);

    const data = {
      message: `Menghapus data student id ${id}`,
      data: students,
    };

    res.json(data);
  }
}

const object = new StudentController();

module.exports = object;
