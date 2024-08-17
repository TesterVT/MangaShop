// AuthModal.jsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaVk } from 'react-icons/fa';

const AuthModal = ({ show, handleClose }) => {
  const [authMode, setAuthMode] = useState('login'); // 'login', 'register', 'reset'

  const toggleAuthMode = (mode) => {
    setAuthMode(mode);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {authMode === 'login' && 'Вход'}
          {authMode === 'register' && 'Регистрация'}
          {authMode === 'reset' && 'Сброс пароля'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {authMode === 'login' && (
            <>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Эл. почта или логин</Form.Label>
                <Form.Control type="email" placeholder="Введите ваш e-mail или логин" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Введите ваш пароль" />
              </Form.Group>
              <Button variant="warning" type="submit" className="w-100 mb-3">
                Войти
              </Button>
              <div className="text-center mb-3">или</div>
              <Button variant="outline-secondary" className="w-100 mb-3">
                <FaVk /> Войти через VK
              </Button>
              <div className="text-center">
                <a href="#forgot-password" className="text-muted" onClick={() => toggleAuthMode('reset')}>
                  Забыли пароль?
                </a>
              </div>
              <div className="text-center mt-2">
                <a href="#register" className="text-muted" onClick={() => toggleAuthMode('register')}>
                  Нет аккаунта? Создайте!
                </a>
              </div>
            </>
          )}
          {authMode === 'register' && (
            <>
              <Form.Group controlId="formBasicName">
                <Form.Label>Имя</Form.Label>
                <Form.Control type="text" placeholder="Введите ваше имя" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Адрес эл. почты</Form.Label>
                <Form.Control type="email" placeholder="Введите ваш e-mail" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" placeholder="Введите ваш пароль" />
              </Form.Group>
              <Form.Group controlId="formBasicPasswordConfirm">
                <Form.Label>Подтверждение пароля</Form.Label>
                <Form.Control type="password" placeholder="Повторите ваш пароль" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Согласен на получение рассылки о новостях, акциях и новинках" />
              </Form.Group>
              <Button variant="warning" type="submit" className="w-100 mb-3">
                Продолжить
              </Button>
              <div className="text-center mb-3">или</div>
              <Button variant="outline-secondary" className="w-100 mb-3">
                <img src="path/to/vk-icon.png" alt="VK" className="vk-icon" /> Войти через VK
              </Button>
              <div className="text-center">
                <a href="#forgot-password" className="text-muted" onClick={() => toggleAuthMode('reset')}>
                  Забыли пароль?
                </a>
              </div>
              <div className="text-center mt-2">
                <a href="#login" className="text-muted" onClick={() => toggleAuthMode('login')}>
                  Уже есть аккаунт? Войдите!
                </a>
              </div>
            </>
          )}
          {authMode === 'reset' && (
            <>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Адрес эл. почты</Form.Label>
                <Form.Control type="email" placeholder="Введите ваш e-mail" />
              </Form.Group>
              <Button variant="warning" type="submit" className="w-100 mb-3">
                Отправить ссылку на сброс пароля
              </Button>
              <div className="text-center">
                <a href="#login" className="text-muted" onClick={() => toggleAuthMode('login')}>
                  Вернуться к входу
                </a>
              </div>
            </>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
