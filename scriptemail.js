
    // Initialize EmailJS
    emailjs.init('eEh77wh3g6nkN_PPG'); // Replace with your actual EmailJS user ID

    const daysGrid = document.getElementById("days-grid");
    const monthYear = document.getElementById("month-year");
    const prevMonthBtn = document.getElementById("prev-month");
    const nextMonthBtn = document.getElementById("next-month");
    const modal = document.getElementById("registration-modal");
    const backdrop = document.getElementById("backdrop");
    const closeModalBtn = document.getElementById("close-modal");
    const submitRegistrationBtn = document.getElementById("submit-registration");

    const now = new Date();
    let currentMonth = now.getMonth();
    let currentYear = now.getFullYear();

    const lessons = [
      { day: "Monday" },
      { day: "Wednesday" },
      { day: "Friday" },
    ];

    function renderCalendar() {
      daysGrid.innerHTML = "";
      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      monthYear.textContent = `${currentYear}-${currentMonth + 1}`;

      // Add empty days for alignment
      for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("day");
        daysGrid.appendChild(emptyDay);
      }

      // Add days of the month
      for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = i;

        // Check if the day is a lesson day (Mon, Wed, Fri)
        const dayOfWeek = new Date(currentYear, currentMonth, i).getDay();
        if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) {
          dayDiv.classList.add("has-lesson");
          dayDiv.addEventListener("click", () => openModal(i));
        }

        daysGrid.appendChild(dayDiv);
      }
    }

    function openModal(day) {
      const dayString = new Date(currentYear, currentMonth, day).toDateString();
      document.querySelector(".modal-header").textContent = `Register for Zoom Lesson on ${dayString}`;
      modal.classList.add("open");
      backdrop.classList.add("open");
    }

    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("open");
      backdrop.classList.remove("open");
    });

    backdrop.addEventListener("click", () => {
      modal.classList.remove("open");
      backdrop.classList.remove("open");
    });

    submitRegistrationBtn.addEventListener("click", () => {
      const name = document.getElementById("student-name").value;
      const phone = document.getElementById("phone-number").value;
      const teacher = document.getElementById("teacher-select").value;

      if (!name || !phone || !teacher) {
        alert("Please fill all fields!");
        return;
      }

      // Prepare template parameters
      const templateParams = {
          student_name: name,
          student_phone: phone,
          teacher_name: teacher,
          date: new Date().toLocaleString() // Registration date
      };

      // Send the registration to email using EmailJS
      emailjs.send('service_k08jf6y', 'template_23b9wy3', templateParams)
          .then(function(response) {
              alert('Your registration has been sent!');
              console.log('Success:', response);
          }, function(error) {
              alert('Failed to send the email.');
              console.log('Error:', error);
          });

      // Close the modal
      modal.classList.remove("open");
      backdrop.classList.remove("open");
    });

    prevMonthBtn.addEventListener("click", () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar();
    });

    nextMonthBtn.addEventListener("click", () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar();
    });

    renderCalendar();
