const mkhModel = require('../model/mkhModel')

exports.getMkhAddresses = async (req, res) => {
    try {
        const queryObj = { ...req.query };
        const excludeFields = ['limit', 'sort', 'page', 'fields'];
        excludeFields.forEach(el => delete queryObj[el]);
        const mkhAddresses = await mkhModel.Address.find(queryObj);
        res.status(200).json({
            status: 'success',
            results: mkhAddresses.length,
            data: {
                mkhAddresses
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err
        })
    }
}
exports.postMkhAddress = async (req, res) => {
    try {
        const newAddress = await mkhModel.Address.create(req.body);
        res.status(200).json({
            status: 'success',
            data: {
                newAddress
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err
        })
    }
}
exports.getMkhAddress = async (req, res) => {
    try {
        const mkhAddress = await mkhModel.Address.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                mkhAddress
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err
        })
    }
}
exports.updateMkhAddress = async (req, res) => {
    try {
        let mkhAddress = await mkhModel.Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!mkhAddress) {
            res.status(404).json({
                status: 'fail',
                message: 'Address not found'
            })
        } else {
            res.status(200).json({
                status: 'success',
                data: {
                    mkhAddress
                }
            })
        }
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err.message
        })
    }
}
exports.deleteMkhAddress = async (req, res) => {
    try {
        await mkhModel.Address.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success'
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err
        })
    }
}