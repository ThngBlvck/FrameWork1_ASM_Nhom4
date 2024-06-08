const DepartmentsModel = require("../models/departments");
const multer = require('multer');

exports.getDepartments = async (req, res, next) => {
    const departments = await DepartmentsModel.findAll({
        attributes: ['id', 'name']
    });
        res.status(200).json({
            data: departments
        })
}

exports.getDepartmentsById = async (req, res, next) => {
    let id = req.params.id;
    const departments = await DepartmentsModel.findByPk(id, {
        attributes: ['id', 'name']
    });
        res.status(200).json({
            departments: departments
        });
}

exports.deleteDepartments = async (req, res, next) => {
    let id = req.params.id;
    const departments = await DepartmentsModel.destroy({
        where: { id: id }
    });
        res.status(201).json({
            message: 'Xoá phòng ban thành công',
            departments: departments
        });
}

exports.addDepartments = async (req, res, next) => {
    try {
        const departments = {
            name: req.body.name
        }

        const departmentsResponse = await DepartmentsModel.create(departments,{ fields: ['name']})
            res.status(201).json({
                message: 'Thêm phòng ban thành công',
                departments: departmentsResponse
            })


    } catch (error) {
        console.error("Lỗi khi tạo phòng ban:", error);
        res.status(500).json({
            message: "Đã xảy ra lỗi khi tạo phòng ban"
        });
    }
};

exports.updateDepartments = async (req, res) => {
    try {
        let id = req.params.id;

        const departments = await DepartmentsModel.findByPk(id);

        if (!departments) {
            return res.status(404).json({ message: "Không tìm thấy phòng ban" });
        }

        departments.name = req.body.name || departments.name;

        await departments.save();

        res.status(201).json({
            message: 'Sửa phòng ban thành công',
            departments: departments
        })
    } catch (error) {
        console.error("Lỗi khi Sửa phòng ban:", error);
        res.status(500).json({
            message: "Đã xảy ra lỗi khi Sửa phòng ban"
        });
    }
};