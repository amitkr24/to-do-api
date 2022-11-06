const User = require("../model/user");
const To_do_app = require("../model/to_do_app");
const jwt = require("jsonwebtoken");

//login user
module.exports.login = async function login(req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user || user.password != req.body.password) {
      //if user dosen't exist or invalid password
      return res.json(401, {
        message: "Invalid username/password",
      });
    }
    //if log in successfull return a new jwt token that expires in 30 min
    return res.json(200, {
      message:
        "Login successfull, JWT token sen't successfully, please keep it safe!",
      data: {
        //creating the new jwt token
        token: jwt.sign(user.toJSON(), "NMaSNppZvKmDVqtVwaUWLBviPaO5qa9X", {
          expiresIn: "1800000",
        }),
      },
    });
  } catch {
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

//create task
module.exports.createTodo = async function (req, res) {
  try {
    let task = await To_do_app.create(req.body);
    return res.status(200).json({
      message: "User successfully Created",
      data: {
        task: {
          task: task,
        },
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error !",
    });
  }
};

//update task
module.exports.taskUpdate = async function (req, res) {
  try {
    //find and update client
    let updated_data = await To_do_app.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    let udata = req.body;

    // return response message
    return res.status(200).json({
      message: "Task updated successfully",
      data: {
        udata,
      },
    });
  } catch (err) {
    //return error if occur any
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//fetch all task
module.exports.todoList = async function (req, res) {
  try {
    let pageSize = req.query.pageSize;
    let page = req.query.page - 1;
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    let filter = {
      date: {
        $gte: startDate,
        $lt: endDate,
      },
    };

    // check both date present
    if (startDate === "" || endDate === "") {
      return res.status(400).json({
        status: "failure",
        message: "Please ensure you pick two dates",
      });
    }

    if (!startDate && !endDate) {
      filter = {};
    }

    if (page < 0) {
      return res.status(200).json({
        data: "Please choose valid page number",
      });
    }

    let all_task = await To_do_app.find(filter)
      .limit(pageSize)
      .skip(pageSize * page);

    return res.status(200).json({
      data: {
        all_task,
      },
      message: "All task",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//delete task
module.exports.deleteTask = async function (req, res) {
  try {
    let tid = req.params.id;
    let destroy = await To_do_app.findByIdAndDelete(tid);
    return res.status(200).json({
      message: "Task Deleted Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
