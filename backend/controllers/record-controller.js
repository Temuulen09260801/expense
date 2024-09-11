const sql = require("../config/db");

const getAllRecord = async (req, res) => {
  try {
    const records = await sql`SELECT * FROM record`;
    console.log("Data", records);
    res.status(200).json({ records });
  } catch (error) {
    res.status(400).json({ message: "Failed", error });
  }
};

const getInfo = async (req, res) => {
  try {
    const [income, expense] =
      await sql`SELECT transaction_type, SUM(amount) FROM record GROUP BY transaction_type`;
    res.status(200).json({ income, expense });
  } catch (error) {
    res.status(400).json({ message: "Failed", error });
  }
};
const getChartData = async (req, res) => {
  try {
    const DonutChartData =
      await sql`SELECT  SUM(r.amount),c.name cat_name FROM record r INNER JOIN categories c ON r.cid=c.id WHERE r.transaction_type='EXP' GROUP BY cat_name`;
    const BarChartData =
      await sql`SELECT TO_CHAR(DATE_TRUNC('month',r.created_at),'Mon') AS sar,
SUM(CASE WHEN r.transaction_type = 'EXP' THEN r.amount ELSE 0 end) AS  total_exp,
SUM(CASE WHEN r.transaction_type = 'INC' THEN r.amount ELSE 0 end) AS  total_inc 
FROM record r
GROUP BY DATE_TRUNC('month',r.created_at)
ORDER BY DATE_TRUNC('month',r.created_at);
 `;
    res
      .status(200)
      .json({ message: "success", donut: DonutChartData, bar: BarChartData });
  } catch (error) {
    res.status(400).json({ message: "Failed", error });
  }
};

const createRecord = async (req, res) => {
  const { uid, cid, name, amount, transaction_type, description } = req.body;
  console.log("uid", uid);
  const data = await sql`
    INSERT INTO record (uid, cid, name, amount, transaction_type, description )
    VALUES(${uid}, ${cid}, ${name},${amount},${transaction_type},${description});
    `;
  console.log("DATA", data);
  res.status(201).json({ message: "New record created successfully" });
};

const updateRecord = async (req, res) => {
  const { uid, cid, name, amount, transaction_type, description } = req.body;
  const { id } = req.params;
  const data =
    await sql`UPDATE record SET uid=${uid},cid=${cid}, name=${name}, amount=${amount}, transaction_type=${transaction_type}, description=${description} WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Update record success", Record: data });
};

const deleteRecord = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM record WHERE id=${id}`;
  console.log("DATA", data);
  res.status(200).json({ message: "Delete record success", Record: data });
};

module.exports = {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
  getInfo,
  getChartData,
};
