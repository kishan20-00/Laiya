const floorDetails = require("../models/Floors");

// Add new Floor
exports.addNewFloor = async (req, res) => {
    const { FloorNumber, AvailableSlots, FloorKeeper } = req.body;

    try {
        const newFloor = new floorDetails({
            FloorNumber,
            AvailableSlots,
            FloorKeeper,
        });

        await newFloor.save();
        res.json("Floor Details Added");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an existing Floor
exports.deleteFloor = async (req, res) => {
    const floorID = req.params.id;

    try {
        await floorDetails.findByIdAndDelete(floorID);
        res.status(200).json({ status: "Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ status: "Error with Deleting", error: error.message });
    }
};

// Update an existing Floor
exports.updateFloor = async (req, res) => {
    const id = req.params.id;
    const { FloorNumber, AvailableSlots, FloorKeeper } = req.body;

    try {
        await floorDetails.findByIdAndUpdate(id, {
            FloorNumber,
            AvailableSlots,
            FloorKeeper,
        });
        res.status(200).json({ status: "Floor Details updated" });
    } catch (error) {
        res.status(500).json({ status: "Error with updating floor Details", error: error.message });
    }
};

// View all Floors
exports.viewFloor = async (req, res) => {
    try {
        const floors = await floorDetails.find();
        res.json(floors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// View details of one Floor by ID
exports.viewOneFloor = async (req, res) => {
    const floorID = req.params.id;

    try {
        const floor = await floorDetails.findById(floorID);
        res.status(200).json({ status: "fetched", floor });
    } catch (error) {
        res.status(500).json({ status: "Error with get", error: error.message });
    }
};

// View details of one Floor by Name
exports.viewOneFloorDetail = async (req, res) => {
    const floorName = req.params.name;

    try {
        const floor = await floorDetails.findOne({ FloorNumber: floorName });
        if (floor) {
            res.status(200).json({ status: "success", floor });
        } else {
            res.status(404).json({ status: "error", message: "Floor Details not found" });
        }
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};
