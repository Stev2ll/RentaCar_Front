import React, { useState } from "react";
import "./PasswordRecovery.css"; 

export const RecuperarCount = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [recoveryMessage, setRecoveryMessage] = useState("");
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      // Verificar que las contraseñas coincidan
      if (password !== confirmPassword) {
        setRecoveryMessage("Las contraseñas no coinciden.");
        return;
      }
  
      // Aquí puedes agregar la lógica para enviar la solicitud de recuperación de contraseña al servidor
  
      // Por simplicidad, aquí simplemente mostramos un mensaje de éxito en la página
      setRecoveryMessage("Se ha enviado un enlace de recuperación a tu correo electrónico.");
    };

  return (
    
<div className="password-recovery-container">
      <h1>Recuperación de contraseña</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Correo electrónico:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Nueva contraseña:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <label>
          Confirmar contraseña:
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </label>
        <button type="submit">Recuperar contraseña</button>
      </form>
      {recoveryMessage && <p>{recoveryMessage}</p>}
    </div>
  )
}
