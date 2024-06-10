const SalaryModel = require("../models/salary");
const multer = require('multer');

exports.getSalary = async (req, res, next) => {
    const salary = await SalaryModel.findAll({
        attributes: ['id', 'salary','employee_id']
    });
        res.status(200).json({
            data: salary
        })
}

exports.getSalaryById = async (req, res, next) => {
    let id = req.params.id;
    const salary = await SalaryModel.findByPk(id, {
        attributes: ['id', 'salary','employee_id']
    });
        res.status(200).json({
            salary: salary
        });
}

exports.deleteSalary = async (req, res, next) => {
    let id = req.params.id;
    const salary = await SalaryModel.destroy({
        where: { id: id }
    });
        res.status(201).json({
            message: 'Xoá lương nhân viên thành công',
            salary: salary
        });
}

exports.addSalary = async (req, res, next) => {
    try {
        const salary = {
            salary: req.body.salary,
            employee_id: req.body.employee_id,
            
        }

        const salaryResponse = await SalaryModel.create(salary,{ fields: ['salary','employee_id']})
            res.status(201).json({
                message: 'Thêm nhân viên thành công',
                salary: salaryResponse
            })


    } catch (error) {
        console.error("Lỗi khi tạo nhân viên:", error);
        res.status(500).json({
            message: "Đã xảy ra lỗi khi tạo nhân viên"
        });
    }
};



exports.updateSalary = async (req, res) => {
    try {
        let id = req.params.id;

        const salary = await SalaryModel.findByPk(id);

        if (!salary) {
            return res.status(404).json({ message: "Không tìm thấy nhân viên" });
        }

        salary.salary = req.body.salary || salary.salary;
        salary.employee_id = req.body.employee_id || salary.employee_id;
       

        await salary.save();

        res.status(201).json({
            message: 'Sửa lương nhân viên thành công',
            salary: salary
        })
    } catch (error) {
        console.error("Lỗi khi Sửa lương nhân viên:", error);
        res.status(500).json({
            message: "Đã xảy ra lỗi khi Sửa lương nhân viên"
        });
    }
};