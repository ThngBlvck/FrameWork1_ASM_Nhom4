const EmployeeModel = require("../models/employees");
const multer = require('multer');

exports.getEmployee = async (req, res, next) => {
    const employee = await EmployeeModel.findAll({
        attributes: ['id', 'name', 'position_id', 'department_id']
    });
        res.status(200).json({
            data: employee
        })
}

exports.getEmployeeById = async (req, res, next) => {
    let id = req.params.id;
    const employee = await EmployeeModel.findByPk(id, {
        attributes: ['id', 'name',  'position_id', 'department_id']
    });
        res.status(200).json({
            employee: employee
        });
}

exports.deleteEmployee = async (req, res, next) => {
    let id = req.params.id;
    const employee = await EmployeeModel.destroy({
        where: { id: id }
    });
        res.status(201).json({
            message: 'Xoá nhân viên thành công',
            employee: employee
        });
}

exports.addEmployee = async (req, res, next) => {
    try {
        const employee = {
            name: req.body.name,

            position_id: req.body.position_id,
            department_id: req.body.department_id
        }

        const employeeResponse = await EmployeeModel.create(employee,{ fields: ['name', 'position_id', 'department_id']})
            res.status(201).json({
                message: 'Thêm nhân viên thành công',
                employee: employeeResponse
            })


    } catch (error) {
        console.error("Lỗi khi tạo nhân viên:", error);
        res.status(500).json({
            message: "Đã xảy ra lỗi khi tạo nhân viên"
        });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        let id = req.params.id;

        const employee = await EmployeeModel.findByPk(id);

        if (!employee) {
            return res.status(404).json({ message: "Không tìm thấy nhân viên" });
        }

        employee.name = req.body.name || employee.name;
        employee.position_id = req.body.position_id || employee.position_id;
        employee.department_id = req.body.department_id || employee.department_id;

        await employee.save();

        res.status(201).json({
            message: 'Sửa nhân viên thành công',
            product: employee
        })
    } catch (error) {
        console.error("Lỗi khi Sửa nhân viên:", error);
        res.status(500).json({
            message: "Đã xảy ra lỗi khi Sửa nhân viên"
        });
    }
};
