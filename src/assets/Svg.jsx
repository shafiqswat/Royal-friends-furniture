/** @format */

import React from "react";

// Crown Icon for Logo
export const CrownIcon = ({ className = "w-8 h-8", fill = "currentColor" }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M5 16L3 8l5.5 5L12 4l3.5 9L21 8l-2 8H5zm2.7-2h8.6l.9-4.4L14 12l-2-6-2 6-3.2-2.4L7.7 14z' />
  </svg>
);

// Home Icon
export const HomeIcon = ({ className = "w-6 h-6", fill = "currentColor" }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
  </svg>
);

// Briefcase Icon
export const BriefcaseIcon = ({
  className = "w-6 h-6",
  fill = "currentColor",
}) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-9-2h6v2h-6V4zm9 15H4V8h16v11z' />
  </svg>
);

// Settings Icon
export const SettingsIcon = ({
  className = "w-6 h-6",
  fill = "currentColor",
}) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z' />
  </svg>
);

// Wrench Icon
export const WrenchIcon = ({
  className = "w-6 h-6",
  fill = "currentColor",
}) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M22.7,19l-9.1-9.1c.9-2.3,0.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9,6L6,9L1.6,4.7C0.4,7.1,0.9,10.1,2.9,12.1 c1.9,1.9,4.6,2.4,6.9,1.5l9.1,9.1c0.4,0.4,1,0.4,1.4,0l2.3-2.3C23.1,20,23.1,19.4,22.7,19z' />
  </svg>
);

// Award Icon
export const AwardIcon = ({ className = "w-6 h-6", fill = "currentColor" }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z' />
  </svg>
);

// Dollar Sign Icon
export const DollarSignIcon = ({
  className = "w-6 h-6",
  fill = "currentColor",
}) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5V18H13V16.5C14.66,16.5 16,15.16 16,13.5C16,12.07 15.24,10.9 14.09,10.38L13,9.93V7.5H11V9.93C9.76,10.35 9,11.62 9,13.07H11C11,12.24 11.45,11.5 12,11.5C12.55,11.5 13,11.95 13,12.5C13,13.05 12.55,13.5 12,13.5C11.17,13.5 10.5,12.83 10.5,12H9C9,13.93 10.57,15.5 12.5,15.5V13.5H14.5V15.5C15.33,15.5 16,14.83 16,14H18C18,15.93 16.43,17.5 14.5,17.5V16.5H11Z' />
  </svg>
);

// Users Icon
export const UsersIcon = ({ className = "w-6 h-6", fill = "currentColor" }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99L14 10.5 12.01 8.99A2.5 2.5 0 0 0 10 8H8.46c-.8 0-1.54.37-2.01.99L4 10.5V22h2v-6h2.5l2.5-7.5h2l2.5 7.5H14v6h2zM6.5 6.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S5 4.17 5 5s.67 1.5 1.5 1.5z' />
  </svg>
);

// Truck Icon
export const TruckIcon = ({ className = "w-6 h-6", fill = "currentColor" }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M20,8H17V4H3C1.89,4 1,4.89 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8M6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5M17,12V9.5H19.5L21.46,12H17Z' />
  </svg>
);

// Star Icon
export const StarIcon = ({ className = "w-5 h-5", fill = "currentColor" }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z' />
  </svg>
);

// Phone Icon
export const PhoneIcon = ({ className = "w-5 h-5", fill = "currentColor" }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z' />
  </svg>
);

// Mail Icon
export const MailIcon = ({ className = "w-5 h-5", fill = "currentColor" }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z' />
  </svg>
);

// Map Pin Icon
export const MapPinIcon = ({
  className = "w-5 h-5",
  fill = "currentColor",
}) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22S19,14.25 19,9A7,7 0 0,0 12,2Z' />
  </svg>
);

// Menu Icon
export const MenuIcon = ({ className = "w-6 h-6", fill = "currentColor" }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' />
  </svg>
);

// Close Icon
export const CloseIcon = ({ className = "w-6 h-6", fill = "currentColor" }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' />
  </svg>
);

// Arrow Right Icon
export const ArrowRightIcon = ({
  className = "w-5 h-5",
  fill = "currentColor",
}) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z' />
  </svg>
);

// Check Icon
export const CheckIcon = ({ className = "w-5 h-5", fill = "currentColor" }) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z' />
  </svg>
);

// WhatsApp Icon
export const WhatsAppIcon = ({
  className = "w-6 h-6",
  fill = "currentColor",
}) => (
  <svg
    className={className}
    viewBox='0 0 24 24'
    fill={fill}>
    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488' />
  </svg>
);
