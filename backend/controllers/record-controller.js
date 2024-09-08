const sql = require("../config/db");

const getAllRecord = async (req, res) => {
  try {
    const records = await sql`SELECT * FROM records`;
    console.log("Data", records);
    res.status(200).json({ records });
  } catch (error) {
    res.status(400).json({ message: "Failed", error });
  }
};

const getInfo = async (req, res) => {
  try {
    const [income, expense] =
      await sql`SELECT transaction_type, SUM(amount) FROM records GROUP BY transaction_type`;
    res.status(200).json({ income, expense });
  } catch (error) {
    res.status(400).json({ message: "Failed", error });
  }
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

module.exports = {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
  getInfo,
};
