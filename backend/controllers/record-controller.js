const sql = require("../config/db");

const getAllRecord = async (req, res) => {
  const data = await sql`SELECT * FROM records`;
  console.log("Data", data);
  res.status(200).json({ message: "Success", record: data });
};

const createRecord = async (req, res) => {
  const { uid, cid, name, amount, transaction_type, description } = req.body;
  console.log("uid", uid);
  const data = await sql`
    INSERT INTO records (uid, cid, name, amount, transaction_type, description )
    VALUES(${uid}, ${cid}, ${name},${amount},${transaction_type},${description});
    `;
  console.log("DATA", data);
  res.status(201).json({ message: "New record created successfully" });
};

const updateRecord = async (req, res) => {
  const { uid, cid, name, amount, transaction_type, description } = req.body;
  const { id } = req.params;
  const data =
    await sql`UPDATE records SET uid=${uid},cid=${cid}, name=${name}, amount=${amount}, transaction_type=${transaction_type}, description=${description} WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Update record success", Record: data });
};

const deleteRecord = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM records WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Delete record success", Record: data });
};

module.exports = { getAllRecord, createRecord, updateRecord, deleteRecord };
