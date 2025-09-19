/** @format */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { mapConfig as defaultConfig } from "@/assets/Dummy";

const LeafletMapComponent = ({ config = defaultConfig }) => {
  const [isClient, setIsClient] = useState(false);
  const [L, setL] = useState(null);
  const mapRef = useRef(null);
  const containerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    setIsClient(true);

    const initializeMap = async () => {
      try {
        // Dynamically import Leaflet
        const leaflet = await import("leaflet");
        await import("leaflet/dist/leaflet.css");

        setL(leaflet.default);

        // Fix Leaflet marker icon for Next.js
        delete leaflet.default.Icon.Default.prototype._getIconUrl;
        leaflet.default.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        });
      } catch (error) {
        console.error("Error loading Leaflet:", error);
      }
    };

    initializeMap();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isClient || !L || !containerRef.current || mapInstanceRef.current) {
      return;
    }

    // Create map instance
    const map = L.map(containerRef.current, {
      center: config?.center || [25.1753, 55.3721],
      zoom: config?.zoom || 15,
      scrollWheelZoom: true,
      attributionControl: false,
      doubleClickZoom: true,
      dragging: true,
      zoomControl: true,
      touchZoom: true,
      boxZoom: true,
      keyboard: true,
    });

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add marker
    const markerPos = (config?.marker && config.marker.position) ||
      config?.center || [25.1753, 55.3721];
    const dragonMartMarker = L.marker(markerPos).addTo(map);

    // Add popup using config
    const title = (config?.marker && config.marker.title) || "Location";
    const desc = (config?.marker && config.marker.description) || "";
    const coordsText = Array.isArray(markerPos)
      ? `${markerPos[0]}, ${markerPos[1]}`
      : "";
    const gmaps =
      config?.googleMapsUrl ||
      `https://www.google.com/maps?q=${encodeURIComponent(coordsText)}`;
    dragonMartMarker.bindPopup(`
      <div style="text-align: center;">
        <strong>${title}</strong><br>
        <span style="font-size: 12px; color: #666;">${desc}</span><br>
        <span style="font-size: 12px; color: #666;">${coordsText}</span><br>
        <button 
          onclick="window.open('${gmaps}', '_blank')"
          style="margin-top: 8px; padding: 4px 12px; background: #3b82f6; color: white; border: none; border-radius: 4px; font-size: 12px; cursor: pointer;"
        >
          View on Google Maps
        </button>
      </div>
    `);

    // Store map instance
    mapInstanceRef.current = map;

    // Handle map click to open Google Maps
    const handleMapClick = (e) => {
      // You can add logic here if needed
    };

    map.on("click", handleMapClick);
  }, [isClient, L]);

  // Show loading state
  if (!isClient || !L) {
    return (
      <div
        style={{
          width: "100%",
          height: "300px",
          borderRadius: "0.75rem",
          overflow: "hidden",
        }}
        className='shadow-lg border border-wood-oak flex items-center justify-center bg-gray-100'>
        <div className='text-wood-ash'>Loading map...</div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        borderRadius: "0.75rem",
        overflow: "hidden",
      }}
      className='shadow-lg border-2 border-wood-ash'>
      <div
        ref={containerRef}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LeafletMapComponent;
