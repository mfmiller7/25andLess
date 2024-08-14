import { useState, useEffect } from "react";
import { ScrollView } from "../styles";
import { Event, ShowListProps } from "../types";

export default function ShowList({ id }: ShowListProps) {
    
    const [data, setData] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/${id}`); // Fetch data using the id
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Upcoming Events</h1>
            <ScrollView>
                {data.map((event, index) => (
                    <div key={index} className="event-card">
                        <img src={event.image} alt={event.name} className="event-image" />
                        <h2>{event.name}</h2>
                        <p><strong>Date:</strong> {event.localDate}</p>
                        <p><strong>Time:</strong> {event.localTime}</p>
                        <p><strong>Genre:</strong> {event.genre} - {event.subGenre}</p>
                        <p><strong>Info:</strong> {event.info}</p>
                        <p>
                            <strong>Venue:</strong> {event.venueName}, {event.venueCity}, {event.venueState}, {event.venueCountry}
                        </p>
                        <a href={event.url} target="_blank" rel="noopener noreferrer">More Info</a>
                    </div>
                ))}
            </ScrollView>
        </div>
    );
}