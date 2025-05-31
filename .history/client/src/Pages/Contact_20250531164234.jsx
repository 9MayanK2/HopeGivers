/* Container section */
.contact-section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 4rem 2rem;
  background-color: #f8f8f8;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Left side (text + contact info) */
.contact-left {
  flex: 1;
  min-width: 300px;
  padding-right: 2rem;
}

.contact-left h2 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 1rem;
}

.contact-left p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.contact-info p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #000;
  margin-bottom: 0.75rem;
}

/* Right side (form) */
.contact-right {
  flex: 1;
  min-width: 320px;
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

/* Form styling */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.form-row input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 1rem;
  background-color: #f7f7f7;
  outline: none;
  transition: border 0.3s ease;
}

.form-row input:focus {
  border-color: #e63946;
}

/* Full-width inputs */
.full-width {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 1rem;
  background-color: #f7f7f7;
  outline: none;
}

.full-width:focus {
  border-color: #e63946;
}

textarea.full-width {
  resize: none;
}

/* Submit button */
.contact-form button {
  background-color: #e63946;
  color: white;
  padding: 0.85rem;
  border: none;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.contact-form button:hover {
  background-color: #c62828;
}

/* Responsive styles */
@media (max-width: 768px) {
  .contact-section {
    flex-direction: column;
    padding: 2rem 1rem;
    text-align: center;
  }

  .contact-left, .contact-right {
    width: 100%;
    padding: 0;
  }

  .form-row {
    flex-direction: column;
  }
}