const Efficiency = require('../models/efficiency');
const moment = require('moment');

exports.getAllEfficiency = async (req, res, next) => {
  try {
    const efficiency = await Efficiency.findAll({
      attributes: [
        "id",
        "job",
        "progress",
        "employee_id",
        "createdAt",
        "updatedAt"
      ],
    });

    if (efficiency.length === 0) {
      return res.status(200).json({
        message: "Không Có Dữ Liệu",
        data: [],
      });
    }

    res.status(200).json({
      data: efficiency,
    });
  } catch (error) {
    console.error('Error fetching efficiency data:', error);
    next(error);  // Pass the error to the error handling middleware
  }
};

exports.getOneEfficiency = async (req, res, next) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(404).json({
      message: "INVALID id",
      data: [],
    });
  }

  try {
    // Fetch the efficiency record by ID
    const efficiency = await Efficiency.findByPk(id, {
      attributes: [
        "id",
        "job",
        "progress",
        "employee_id",
        "createdAt",
        "updatedAt"
      ],
    });

    // If the record does not exist, send a 404 error
    if (!efficiency) {
      return res.status(404).json({
        message: "Không Có Dữ Liệu",
        data: [],
      });
    }

    // If the record exists, send it in the response
    res.status(200).json({
      message: "Success",
      data: efficiency,
    });

  } catch (error) {
    // Handle any other errors
    next(error);
  }
};

exports.creatEfficiency = async (req, res, next) => {
  try {
    // Kiểm tra các trường không được để trống
    if (!req.body.job || !req.body.progress || !req.body.employee_id ) {
      return res.status(400).json({ error: 'Vui lòng điền đầy đủ thông tin' });
    }

    // Kiểm tra xem id đã tồn tại trong cơ sở dữ liệu chưa
    const existingEfficiency = await Efficiency.findOne({ where: { employee_id: req.body.employee_id } });
    if (existingEfficiency) {
      return res.status(400).json({ error: 'ID nhân viên đã tồn tại' });
    }

    // Tạo mới bản ghi efficiency
    let efficiency = {
      job: req.body.job,
      progress: req.body.progress,
      employee_id: req.body.employee_id
    };

    const efficiencyRes = await Efficiency.create(efficiency, {
      fields: [
        "job",
        "progress",
        "employee_id"
      ],
    });

    res.status(201).json({
      message: 'Thêm Thành Công',
      data: efficiencyRes,
    });
  } catch (error) {
    console.error('Error creating efficiency:', error);
    next(error);
  }
};

exports.deleteEfficiency = async (req, res, next) => {
  const { id } = req.params;

  const deletedEfficiency = await Efficiency.destroy({
    where: { id: id },
  });

  if (deletedEfficiency === 0) {
    return res.status(404).json({
      message: "Không có dữ liệu",
    });
  }

  res.status(200).json({
    message: "Xóa thành công",
  });
};

exports.updateEfficiency = async (req, res, next) => {
  try {
    const id = req.params.id;

    // Kiểm tra các trường không được để trống
    if (!req.body.job || !req.body.progress || !req.body.employee_id ) {
      return res.status(400).json({ error: 'Vui lòng điền đầy đủ thông tin' });
    }

    // Kiểm tra xem id có được thay đổi không
    const existingEfficiency = await Efficiency.findByPk(id);
    if (existingEfficiency.employee_id !== req.body.employee_id) {
      return res.status(400).json({ error: 'Không thể thay đổi ID của nhân viên' });
    }

    const efficiencyUpdates = {
      job: req.body.job,
      progress: req.body.progress,
      employee_id: req.body.employee_id
    };

    const [updatedRowCount, updateEfficiency] = await Efficiency.update(efficiencyUpdates, {
      where: { id: id },
      returning: true,
    });

    if (updatedRowCount === 0) {
      return res.status(404).json({ error: "Không tìm thấy sinh viên để cập nhật" });
    }

    res.status(200).json({
      message: "Cập nhật nhân viên thành công",
      data: updateEfficiency[0],
    });
  } catch (error) {
    console.error("Lỗi khi cập nhật nhân viên:", error);
    res.status(500).json({ error: "Đã xảy ra lỗi khi cập nhật nhân viên",
      message: "Không tìm thấy nhân viên để sửa"
    });
  }
};

