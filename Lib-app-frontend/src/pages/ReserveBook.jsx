import React, { useState } from 'react';
import { Button, Modal, Alert } from 'react-bootstrap';

const BASE_URL = "http://localhost:5000"; 

const ReserveBook = ({ bookId, userId }) => {
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleReserve = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${BASE_URL}/reserve`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: userId,
                    book_id: bookId,
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to reserve book: ${errorText}`);
            }

            setShowModal(true); // Show the modal upon successful reservation
        } catch (err) {
            console.error(err);
            setError('Failed to reserve book');
        } finally {
            setLoading(false);
        }
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <div>
            <Button onClick={handleReserve} disabled={loading}>
                {loading ? 'Reserving...' : 'Reserve Book'}
            </Button>
            {error && <Alert variant="danger" className="mt-2">{error}</Alert>}
            
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Reservation Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your book has been reserved successfully!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ReserveBook;
