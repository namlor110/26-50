const questions = [
    {
        question: "Câu 26: Để phá thế bao vây cô lập, phát triển lực lượng và giành thế chủ động, tháng 6-1950, lần đầu tiên TW Đảng đã chủ trương mở chiến dịch tiến công quy mô lớn. Đó là:",
        options: ["Chiến dịch Việt Bắc", "Chiến dịch Tây Bắc", "Chiến dịch Biên Giới", "Chiến dịch Thượng Lào"],
        answer: 2 // Chiến dịch Biên Giới
    },
    {
        question: "Câu 27: Quân Trung Hoa Dân Quốc vào nước Việt Nam nhằm âm mưu gì?",
        options: ["Giúp Việt Nam đánh đuổi thực dân Pháp", "Lật đổ chính quyền cách mạng của Việt Nam", "Giúp đỡ chính quyền cách mạng nước Việt Nam", "Giúp Việt Nam đánh đuổi quân Anh"],
        answer: 1 // Lật đổ chính quyền cách mạng của Việt Nam
    },
    {
        question: "Câu 28: Trong thời gian từ tháng 8/1945 - tháng 3/1946, chủ trương của Đảng Cộng sản Đông Dương khi đấu tranh với quân Trung Hoa Dân Quốc và bọn phản cách mạng ở miền Bắc là gì?",
        options: ["Kiên quyết chống trà những hành động của quân Trung Hoa Dân Quốc", "Tạm thời hòa hoãn, tránh xung đột với quân Trung Hoa Dân Quốc", "Nhân nhượng toàn bộ các yêu sách của chúng", "Tạm hòa hoãn với Pháp ở Nam Bộ để đấu tranh quân sự với Trung Hoa dân quốc"],
        answer: 1 // Tạm thời hòa hoãn, tránh xung đột với quân Trung Hoa Dân Quốc
    },
    {
        question: "Câu 29: Ngày 8/9/1945 Chủ tịch Hồ Chí Minh kí sắc lệnh thành lập Nha Bình dân học vụ, đây là cơ quan chuyên trách về việc gì?",
        options: ["Giải quyết giặc dốt", "Giải quyết giặc đói", "Chống giặc ngoại xâm", "Khó khăn về tài chính"],
        answer: 0 // Giải quyết giặc dốt
    },
    {
        question: "Câu 30: Trong Hiệp định Sơ bộ ngày 6/3/1946, Chính phủ Pháp công nhận nước Việt Nam Dân chủ Cộng hòa là...",
        options: ["một quốc gia tự do, nhưng vẫn thuộc khối liên hiệp Pháp", "một quốc gia độc lập tự do, nhưng vẫn thuộc khối liên hiệp Pháp", "một quốc gia tự trị, nằm trong liên bang Đông Dương thuộc Pháp", "một quốc gia độc lập, nằm trong liên bang Đông Dương thuộc Pháp"],
        answer: 0 // một quốc gia tự do, nhưng vẫn thuộc khối liên hiệp Pháp
    },
    {
        question: "Câu 31: Ý nghĩa của chiến thắng Biên Giới Thu - Đông đối với cách mạng Việt Nam là...",
        options: ["Giáng một đòn nặng nề vào ý chí xâm lược của địch, đập tan tuyến phòng thủ và giải phóng hoàn toàn khu vực biên giới, nối liền Việt Nam với thế giới", "Đánh dấu sự trưởng thành vượt bậc về trình độ chiến đấu của quân đội Việt Nam", "Quân ta đã giành được thế chủ động chiến lược trên chiến trường chính Bắc Bộ, tạo bước chuyển biển lớn của kháng chiến vào giai đoạn mới", "Cả A, B, C"],
        answer: 3 // Cả A, B, C
    },
    {
        question: "Câu 32: Để khắc phục tình trạng khó khăn về tài chính sau Cách mạng tháng Tám năm 1945, Chính phủ nước Việt Nam Dân chủ Cộng hòa kêu gọi...",
        options: ["cải cách ruộng đất và thực hành tiết kiệm", "nhân dân cả nước thực hiện 'Ngày đồng tâm'", "nhân dân thực hiện phong trào tăng gia sản xuất", "tinh thần tự nguyện đóng góp của nhân dân"],
        answer: 3 // tinh thần tự nguyện đóng góp của nhân dân
    },
    {
        question: "Câu 33: Việc giải quyết thành công nạn đói, nạn dốt và khó khăn về tài chính sau Cách mạng tháng Tám năm 1945 ở Việt Nam có ý nghĩa gì?",
        options: ["Đánh dấu hoàn thành nhiệm vụ đánh đổ chế độ phong kiến", "Tạo cơ sở để các nước xã hội chủ nghĩa công nhận Việt Nam", "Tạo cơ sở thực lực để ký Hiệp định Sơ bộ với Pháp", "Góp phần tạo ra sức mạnh để bảo vệ chế độ mới"],
        answer: 3 // Góp phần tạo ra sức mạnh để bảo vệ chế độ mới
    },
    {
        question: "Câu 34: Thời gian và địa điểm diễn ra Đại hội Đảng toàn quốc lần thứ hai là...",
        options: ["Tháng 3-1935, tại Ma Cao, Trung Quốc", "Tháng 2-1950, tại Tân Trào, Tuyên Quang", "Tháng 2-1951, tại Vinh Quang, Chiêm Hoá, Tuyên Quang", "Tháng 3-1951, tại Việt Bắc"],
        answer: 2 // Tháng 2-1951, tại Vinh Quang, Chiêm Hoá, Tuyên Quang
    },
    {
        question: "Câu 35: Hãy điền đáp án đúng vào câu sau đây: 'Bằng việc kí Hiệp định Sơ bộ 6/3/1946 và Tạm ước 14/9/1946, Việt Nam đã đập Việt Nam âm mưu của......'.",
        options: ["Mĩ cấu kết với Trung Hoa Dân Quốc", "Pháp cầu kết với Trung Hoa Dân Quốc", "Trung Hoa Dân Quốc cấu kết với Anh", "Pháp cẩu kết với Anh"],
        answer: 1 // Pháp cầu kết với Trung Hoa Dân Quốc
    },
    {
        question: "Câu 36: Tại Đại hội đại biểu toàn quốc lần thứ hai, Đảng quyết định đổi tên thành...",
        options: ["Đảng Cộng sản Đông Dương", "Đảng Cộng sản Việt Nam", "Hội nghiên cứu Chủ nghĩa Mác", "Đảng Lao Động Việt Nam"],
        answer: 3 // Đảng Lao Động Việt Nam
    },
    {
        question: "Câu 37: Sau cách mạng tháng Tám năm 1945, Chính phủ đã phát động phong trào gì để giải quyết khó khăn về tài chính?",
        options: ["'Nhường cơm sẻ áo', 'Hũ gạo cứu đói'...", "'Tăng gia sản xuất! Tăng gia sản xuất ngay!'.", "Xây dựng 'Quỹ độc lập', 'Tuần lễ vàng'.", "Tổ chức 'Ngày đồng tâm', 'Hũ gạo cứu đói'."],
        answer: 2 // Xây dựng "Quỹ độc lập", "Tuần lễ vàng".
    },
    {
        question: "Câu 38: Đại hội Đảng toàn quốc lần thứ hai của Đảng Lao Động Việt Nam đã thông qua một văn kiện mang tính chất cương lĩnh. Đó là:",
        options: ["Cương lĩnh cách mạng Việt Nam.", "Chính cương của Đảng Lao động Việt Nam", "Luận cương về cách mạng Việt Nam", "Cương lĩnh của Đảng Lao Động Việt Nam"],
        answer: 1 // Chính cương của Đảng Lao động Việt Nam
    },
    {
        question: "Câu 39: Chọn phương án đúng nhất: Biện pháp của Đảng để đối phó với quân Trung Hoa Dân Quốc và bọn phản cách mạng ở miền Bắc là nhân nhượng cho chúng một số yêu sách về...",
        options: ["kinh tế, chính trị", "kinh tế, văn hóa", "chính trị, quân sự", "kinh tế, quân sự"],
        answer: 0 // kinh tế, chính trị
    },
    {
        question: "Câu 40: Tác phẩm 'Kháng chiến nhất định thắng lợi' được phát hành khi nào?",
        options: ["6/1946", "7/1946", "7/1947", "9/1947"],
        answer: 3 // 9/1947
    },
    {
        question: "Câu 41: Sau Cách mạng tháng Tám năm 1945, Đảng và nhân dân đã thực hiện biện pháp mang tính chất hàng đầu và lâu dài để giải quyết căn bản nạn đói là...",
        options: ["quyên góp, điều hòa thóc gạo giữa các địa phương trong cả nước", "nghiêm trị những người đầu cơ, tích trữ gạo", "kêu gọi 'tăng gia sản xuất tăng gia sản xuất ngay! tăng gia sản xuất nữa!'", "phát động phong trào 'nhường cơm sẻ áo', 'hũ gạo cứu đói'..."],
        answer: 2 // kêu gọi 'tăng gia sản xuất tăng gia sản xuất ngay! tăng gia sản xuất nữa!'
    },
    {
        question: "Câu 42: Tác giả tác phẩm 'Kháng chiến nhất định thắng lợi' là của ai?",
        options: ["Hồ Chí Minh", "Lê Duẩn", "Trường Chinh", "Phạm Văn Đồng"],
        answer: 0 // Hồ Chí Minh
    },
    {
        question: "Câu 43: Đâu là nơi được coi là căn cứ địa cách mạng của cả nước trong kháng chiến chống Pháp?",
        options: ["Tây Bắc", "Việt Bắc", "Hà Nội", "Điện Biên Phủ"],
        answer: 1 // Việt Bắc
    },
    {
        question: "Câu 44: Chiến thắng nào đã căn bản đánh bại âm mưu đánh nhanh, thắng nhanh của thực dân Pháp?",
        options: ["Việt Bắc", "Trung Du", "Biên Giới", "Hà Nam Ninh"],
        answer: 0 // Việt Bắc
    },
    {
        question: "Câu 45: Khi bắt đầu tiến hành xâm lược Việt Nam, thực dân Pháp đã thực hiện chiến lược:",
        options: ["Dùng người Việt đánh người Việt", "Lấy chiến tranh nuôi chiến tranh", "Đánh nhanh thắng nhanh", "Cả A và B"],
        answer: 3 // Cả A và B
    },
    {
        question: "Câu 46: Ngày 15-10-1947, để đối phó với cuộc tấn công của thực dân Pháp lên căn cứ địa Việt Bắc, Ban thường vụ Trung ương Đảng đã đề ra",
        options: ["Chỉ thị kháng chiến, kiến quốc", "Chỉ thị 'Phá tan cuộc tấn công mùa Đông của giặc Pháp'", "Chủ trương tiến công quân Pháp ở vùng sau lưng chúng", "Lời kêu gọi đánh tan cuộc tấn công lên Việt Bắc của thực dân Pháp"],
        answer: 1 // Chỉ thị 'Phá tan cuộc tấn công mùa Đông của giặc Pháp'
    },
    {
        question: "Câu 47: Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến chống thực dân Pháp vào đêm...",
        options: ["18/12/1946", "19/12/1946", "20/12/1946", "21/12/1946"],
        answer: 1 // 19/12/1946
    },
    {
        question: "Câu 48: Bài học kinh nghiệm từ việc kí kết Hiệp định Sơ bộ (6-3-1946) được Đảng Cộng sản Đông Dương vận dụng như thế nào trong chính sách đối ngoại hiện nay?",
        options: ["Sự ủng hộ của các tổ chức quốc tế", "Giải quyết tranh chấp bằng quân sự", "Nhận nhượng mọi yêu sách của đối phương", "Cùng rắn về nguyên tắc, mềm dẻo về sách lược"],
        answer: 3 // Cùng rắn về nguyên tắc, mềm dẻo về sách lược
    },
    {
        question: "Câu 49: Ở Việt Nam, tín hiệu kháng chiến toàn quốc chống thực dân Pháp nổ ra đầu tiên ở đâu?",
        options: ["Hà Nội", "Hải Phòng", "Nam Bộ", "Lạng Sơn"],
        answer: 0 // Hà Nội
    },
    {
        question: "Câu 50: Để thúc đẩy cuộc kháng chiến tiến lên, theo sáng kiến của Chủ tịch Hồ Chí Minh, ngày 27-3-1948, Ban Thường vụ TW Đảng ra chỉ thị...",
        options: ["Chống lại âm mưu thâm độc dùng người Việt đánh người Việt", "Phát động phong trào thi đua ái quốc", "Tiến hành chiến tranh du kích trên cả nước", "Tất cả các phương án trên"],
        answer: 3 // Tất cả các phương án trên
    }
];


let currentQuestionIndex = 0;

// Hiển thị câu hỏi
function showQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = ""; // Xóa nội dung cũ

    const questionData = questions[currentQuestionIndex];
    const questionTitle = document.createElement("h2");
    questionTitle.textContent = questionData.question;

    quizContainer.appendChild(questionTitle);

    questionData.options.forEach((option, index) => {
        const optionButton = document.createElement("div");
        optionButton.classList.add("option");
        optionButton.textContent = option;

        // Gắn sự kiện click cho mỗi lựa chọn
        optionButton.addEventListener("click", () => handleAnswer(index));
        quizContainer.appendChild(optionButton);
    });
}

// Xử lý chọn đáp án
function handleAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    const options = document.querySelectorAll(".option");

    // Kiểm tra đúng hay sai
    options.forEach((option, index) => {
        if (index === questionData.answer) {
            option.classList.add("correct"); // Đáp án đúng
        }
        if (index === selectedIndex && index !== questionData.answer) {
            option.classList.add("incorrect"); // Đáp án sai
        }
        option.style.pointerEvents = "none"; // Vô hiệu hóa các lựa chọn
    });

    // Hiển thị nút "Câu tiếp theo"
    document.getElementById("next-btn").style.display = "block";
}

// Chuyển đến câu hỏi tiếp theo
document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // Hiển thị câu hỏi tiếp theo
        document.getElementById("next-btn").style.display = "none"; // Ẩn nút
    } else {
        // Kết thúc bài trắc nghiệm
        const quizContainer = document.getElementById("quiz-container");
        quizContainer.innerHTML = `<h2>Bạn đã hoàn thành bài trắc nghiệm!</h2>`;
        document.getElementById("next-btn").style.display = "none";
    }
});

// Bắt đầu bài trắc nghiệm
showQuestion();
