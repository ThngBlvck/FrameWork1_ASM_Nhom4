const PositionModel = require("../models/position");
const multer = require('multer');

exports.getPosition = async (req, res, next) => {
  const position = await PositionModel.findAll({
    attributes: ['id', 'name']
  });
  res.status(200).json({
    data: position
  })
}

exports.getPositionById = async (req, res, next) => {
  let id = req.params.id;
  const position = await PositionModel.findByPk(id, {
    attributes: ['id', 'name']
  });
  res.status(200).json({
    position: position
  });
}

exports.deletePosition = async (req, res, next) => {
  let id = req.params.id;
  const position = await PositionModel.destroy({
    where: { id: id }
  });
  res.status(201).json({
    message: 'Xoá chức vụ thành công',
    position: position
  });
}

exports.addPosition = async (req, res, next) => {
  try {
    const position = {
      name: req.body.name
    }

    const positionResponse = await PositionModel.create(position,{ fields: ['name']})
    res.status(201).json({
      message: 'Thêm chức vụ thành công',
      position: positionResponse
    })
  } catch (error) {
    console.error("Lỗi khi tạo chức vụ:", error);
    res.status(500).json({
      message: "Đã xảy ra lỗi khi tạo chức vụ"
    });
  }
};

exports.updatePosition = async (req, res) => {
  try {
    let id = req.params.id;

    const position = await PositionModel.findByPk(id);

    if (!position) {
      return res.status(404).json({ message: "Không tìm thấy chức vụ" });
    }

    position.name = req.body.name || position.name;

    await position.save();

    res.status(201).json({
      message: 'Sửa chức vụ thành công',
      position: position
    })
  } catch (error) {
    console.error("Lỗi khi Sửa chức vụ:", error);
    res.status(500).json({
      message: "Đã xảy ra lỗi khi sửa chức vụ"
    });
  }
};
