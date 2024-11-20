import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Review.css';
import ReviewData from '../../app-data/ReviewData';
import { useNavigate } from "react-router-dom";

function Review() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 
  const totalPages = Math.ceil(ReviewData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = ReviewData.slice(startIndex, endIndex);

  const navigate = useNavigate();

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="review-container">
      <table className="table table-striped table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ไอดี</th>
            <th>ชื่อนามสกุล</th>
            <th>รีวิวจากลูกค้า</th>
            <th>คะแนนรีวิว</th>
            <th><span style={{ marginLeft: '35px' }}>ตรวจสอบ</span></th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={item.id}>
              <td style={{ textAlign: "left", verticalAlign: 'middle' }}>
                <span style={{ marginLeft: '15px' }}>{startIndex + index + 1}</span>
              </td>
              <td style={{ textAlign: "left", verticalAlign: 'middle' }}>{item.name}</td>
              <td style={{ textAlign: "left", verticalAlign: 'middle' }}>{item.userReview}</td>
              <td dangerouslySetInnerHTML={{ __html: item.rating }} style={{ textAlign: "left", verticalAlign: 'middle' }}></td>
              <td>
                <button className="btn" onClick={() => navigate('CheckDriver')}>ตรวจสอบ</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-3">
        <button className="btn btn-primary mx-2" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>First</button>
        <button className="btn btn-secondary mx-2" onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
        <span className="mx-3 d-flex items-center" style={{verticalAlign: 'middle'}}>{currentPage} / {totalPages}</span>
        <button className="btn btn-secondary mx-2" onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
        <button className="btn btn-primary mx-2" onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>Last</button>
      </div>
    </div>
  );
}

export default Review;
