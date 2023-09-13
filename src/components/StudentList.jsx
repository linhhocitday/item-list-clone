import PropTypes from "prop-types";

/**
 * @typedef StudentItemProps
 *
 * @property {string} student Name of the student
 */

/**
 *
 * @param {StudentItemProps} props
 * @returns
 */

let StudentItem = ({ student }) => {
  return <li>{student}</li>;
};

StudentItem.propTypes = {
  student: PropTypes.string.isRequired,
};

const StudentList = () => {
  // Tạo mảng dữ liệu
  const students = ["Ba Nguyễn", "Bùi Hiên", "Mai Anh"];

  const filteredStudents = students.filter((student) =>
    student.startsWith("B")
  );

  // Chuyển đổi mảng dữ liệu thành mảng các phần tử JSX
  const studentItems = filteredStudents.map((student) => (
    <StudentItem key={student} student={student} />
  ));

  return (
    <div>
      <p>Danh sách sinh viên:</p>

      <ul>
        {/* Nhúng mảng các phẩn tử JSX đã tạo */}
        {studentItems}
      </ul>
    </div>
  );
};

export default StudentList;
