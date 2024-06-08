const CommunicationsModel = require("../models/communications.js");
const multer = require('multer');

exports.getCommunications = async (req, res, next) => {
    const communications= await CommunicationsModel.findAll({
        attributes: ['id', 'name', 'email', 'phone', 'address', 'employee_id']
    });
        res.status(200).json({
            data: communications
        })
}

exports.getCommunicationsById = async (req, res, next) => {
    let id = req.params.id;
    const communications = await CommunicationsModel.findByPk(id, {
        attributes: ['id', 'name', 'email', 'phone', 'address', 'employee_id']
    });
        res.status(200).json({
            communications: communications
        });
}

exports.deleteCommunications = async (req, res, next) => {
    let id = req.params.id;
    const communications = await CommunicationsModel.destroy({
        where: { id: id }
    });
        res.status(201).json({
            message: 'Xoá thông tin nhân viên thành công',
            communications: communications
        });
}

exports.addCommunications = async (req, res, next) => {
    try {
        const communications = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            employee_id: req.body.employee_id
        }

        const communicationsResponse = await CommunicationsModel.create(communications,{ fields: [ 'name', 'email', 'phone', 'address', 'employee_id']})
            res.status(201).json({
                message: 'Thêm thông tin nhân viên thành công',
                communications: communicationsResponse
            })


    } catch (error) {
        console.error("Lỗi khi tạo thông tin nhân viên:", error);
        res.status(500).json({
            message: "Đã xảy ra lỗi khi tạo thông tin nhân viên"
        });
    }
};

exports.updateCommunications = async (req, res) => {
    try {
        let id = req.params.id;

        const communications = await CommunicationsModel.findByPk(id);

        if (!communications) {
            return res.status(404).json({ message: "Không tìm thấy thông nhân viên" });
        }

        communications.name = req.body.name || communications.name;
        communications.email = req.body.email || communications.email;
        communications.phone = req.body.phone || communications.phone;
        communications.address = req.body.address || communications.address;
        communications.employee_id = req.body.employee_id || communications.employee_id;

        await communications.save();

        res.status(201).json({
            message: 'Sửa nhân viên thông tin nhân viên thành công',
            communications: communications
        })
    } catch (error) {
        console.error("Lỗi khi Sửa nhân viên:", error);
        res.status(500).json({
            message: "Đã xảy ra lỗi khi Sửa thông tin nhân viên"
        });
    }
};