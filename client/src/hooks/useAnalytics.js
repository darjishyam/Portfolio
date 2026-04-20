import { useCallback } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001/api";

const useAnalytics = () => {
    const trackHit = useCallback(async (path) => {
        try {
            await axios.post(`${API_URL}/analytics/hit`, { path });
        } catch (error) {
            // Fail silently for analytics
            console.debug("Analytics hit error:", error);
        }
    }, []);

    const trackClick = useCallback(async (projectId) => {
        try {
            await axios.post(`${API_URL}/analytics/click/${projectId}`);
        } catch (error) {
            console.debug("Analytics click error:", error);
        }
    }, []);

    return { trackHit, trackClick };
};

export default useAnalytics;
