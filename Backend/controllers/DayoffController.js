const DayoffModel = require("../models/dayoff");
const multer = require('multer');

exports.getDayoff = async (req, res, next) => {
  const dayoff = await DayoffModel.findAll({
    attributes: ['id', 'name', 'reason', 'dayoff']
  });
  res.status(200).json({
    data: dayoff
  })
}

exports.getDayoffById = async (req, res, next) => {
  let id = req.params.id;
  const dayoff = await DayoffModel.findByPk(id, {
    attributes: ['id', 'name', 'reason', 'dayoff']
  });
  res.status(200).json({
    dayoff: dayoff
  });
}

exports.deleteDayoff = async (req, res, next) => {
  let id = req.params.id;
  const dayoff = await DayoffModel.destroy({
    where: { id: id }
  });
  res.status(201).json({
    message: 'Xoá ngày nghĩ thành công',
    dayoff: dayoff
  });
}

exports.addDayoff = async (req, res, next) => {
  try {
    const dayoff = {
      name: req.body.name,
      reason: req.body.reason,
      dayoff: req.body.dayoff
    }

    const dayoffResponse = await DayoffModel.create(dayoff,{ fields: ['name', 'reason', 'dayoff']})
    res.status(201).json({
      message: 'Thêm ngày nghĩ thành công',
      dayoff: dayoffResponse
    })


  } catch (error) {
    console.error("Lỗi khi tạo ngày nghĩ:", error);
    res.status(500).json({
      message: "Đã xảy ra lỗi khi tạo ngày nghĩ"
    });
  }
};

exports.updateDayoff = async (req, res) => {
  try {
    let id = req.params.id;
    const dayoff = await DayoffModel.findByPk(id);

    if (!dayoff) {
      return res.status(404).json({ message: "Không tìm thấy ngày nghĩ" });
    }

    dayoff.name = req.body.name || dayoff.name;
    dayoff.reason = req.body.reason || dayoff.reason;
    dayoff.dayoff = req.body.dayoff || dayoff.dayoff;

    await dayoff.save();

    res.status(201).json({
      message: 'Sửa ngày nghĩ thành công',
      dayoff: dayoff
    })
  } catch (error) {
    console.error("Lỗi khi sửa ngày nghĩ:", error);
    res.status(500).json({
      message: "Đã xảy ra lỗi khi sửa ngày nghĩ"
    });
  }
};
