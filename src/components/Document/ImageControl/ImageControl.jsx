import { useState } from "react";
import "./ImageControl.css";

const ImageControl = ({ img1, img2 }) => {
  const [brightness1, setBrightness1] = useState(1); // Brightness for first image
  const [brightness2, setBrightness2] = useState(1); // Brightness for second image
  const [contrast1, setContrast1] = useState(1); // Contrast for first image
  const [contrast2, setContrast2] = useState(1); // Contrast for second image
  const [showControls1, setShowControls1] = useState(false); // Show controls for first image
  const [showControls2, setShowControls2] = useState(false); // Show controls for second image

  const handleBrightnessChange1 = (event) => {
    setBrightness1(event.target.value);
  };

  const handleBrightnessChange2 = (event) => {
    setBrightness2(event.target.value);
  };

  const handleContrastChange1 = (event) => {
    setContrast1(event.target.value);
  };

  const handleContrastChange2 = (event) => {
    setContrast2(event.target.value);
  };

  const toggleControls1 = () => {
    setShowControls1(!showControls1);
  };

  const toggleControls2 = () => {
    setShowControls2(!showControls2);
  };

  return (
    <div className="document-content-right-middle-bottom-extra-image">
      {/* First Image */}
      <div className="image-container">
        <img
          src={img1}
          alt="Image 1"
          loading="lazy"
          style={{
            filter: `brightness(${brightness1}) contrast(${contrast1})`,
          }}
        />
        <div
          className="controls"
          style={{ backgroundColor: showControls1 ? "#00000080" : "" }}
        >
          <button className="control-button" onClick={toggleControls1}>
            {!showControls1 ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  rx="12"
                  fill="black"
                  fill-opacity="0.2"
                />
                <path
                  d="M10.2498 17.8334H13.7498C16.6665 17.8334 17.8332 16.6667 17.8332 13.7501V10.2501C17.8332 7.33341 16.6665 6.16675 13.7498 6.16675H10.2498C7.33317 6.16675 6.1665 7.33341 6.1665 10.2501V13.7501C6.1665 16.6667 7.33317 17.8334 10.2498 17.8334Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0825 15.7916V13.5166"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0825 9.34575V8.20825"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0826 12.3793C14.9202 12.3793 15.5993 11.7002 15.5993 10.8626C15.5993 10.025 14.9202 9.34595 14.0826 9.34595C13.245 9.34595 12.5659 10.025 12.5659 10.8626C12.5659 11.7002 13.245 12.3793 14.0826 12.3793Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.91748 15.7916V14.6541"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.91748 10.4833V8.20825"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.91755 14.6542C10.7552 14.6542 11.4342 13.9751 11.4342 13.1375C11.4342 12.2999 10.7552 11.6208 9.91755 11.6208C9.07991 11.6208 8.40088 12.2999 8.40088 13.1375C8.40088 13.9751 9.07991 14.6542 9.91755 14.6542Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  rx="12"
                  fill="white"
                  fill-opacity="0.9"
                />
                <path
                  d="M10.2503 17.8333H13.7503C16.667 17.8333 17.8337 16.6667 17.8337 13.75V10.25C17.8337 7.33332 16.667 6.16666 13.7503 6.16666H10.2503C7.33366 6.16666 6.16699 7.33332 6.16699 10.25V13.75C6.16699 16.6667 7.33366 17.8333 10.2503 17.8333Z"
                  stroke="#BE185D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.082 15.7917V13.5167"
                  stroke="#BE185D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.082 9.34584V8.20834"
                  stroke="#BE185D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0821 12.3792C14.9197 12.3792 15.5988 11.7001 15.5988 10.8625C15.5988 10.0249 14.9197 9.34583 14.0821 9.34583C13.2445 9.34583 12.5654 10.0249 12.5654 10.8625C12.5654 11.7001 13.2445 12.3792 14.0821 12.3792Z"
                  stroke="#BE185D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.91797 15.7917V14.6542"
                  stroke="#BE185D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.91797 10.4833V8.20834"
                  stroke="#BE185D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.91706 14.6542C10.7547 14.6542 11.4337 13.9751 11.4337 13.1375C11.4337 12.2999 10.7547 11.6208 9.91706 11.6208C9.07943 11.6208 8.40039 12.2999 8.40039 13.1375C8.40039 13.9751 9.07943 14.6542 9.91706 14.6542Z"
                  stroke="#BE185D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </button>
          {showControls1 && (
            <div className="brightness-contrast-controls">
              <div className="brightness-control">
                <label>Brightness</label>
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  value={brightness1}
                  onChange={handleBrightnessChange1}
                />
              </div>
              <div className="contrast-control">
                <label>Contrast</label>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={contrast1}
                  onChange={handleContrastChange1}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Second Image */}
      <div className="image-container">
        <img
          src={img2}
          alt="Image 2"
          loading="lazy"
          style={{
            filter: `brightness(${brightness2}) contrast(${contrast2})`,
          }}
        />
        <div
          className="controls"
          style={{ backgroundColor: showControls2 ? "#00000080" : "" }}
        >
          <button className="control-button" onClick={toggleControls2}>
            {!showControls2 ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  rx="12"
                  fill="black"
                  fill-opacity="0.2"
                />
                <path
                  d="M10.2498 17.8334H13.7498C16.6665 17.8334 17.8332 16.6667 17.8332 13.7501V10.2501C17.8332 7.33341 16.6665 6.16675 13.7498 6.16675H10.2498C7.33317 6.16675 6.1665 7.33341 6.1665 10.2501V13.7501C6.1665 16.6667 7.33317 17.8334 10.2498 17.8334Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0825 15.7916V13.5166"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0825 9.34575V8.20825"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0826 12.3793C14.9202 12.3793 15.5993 11.7002 15.5993 10.8626C15.5993 10.025 14.9202 9.34595 14.0826 9.34595C13.245 9.34595 12.5659 10.025 12.5659 10.8626C12.5659 11.7002 13.245 12.3793 14.0826 12.3793Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.91748 15.7916V14.6541"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.91748 10.4833V8.20825"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.91755 14.6542C10.7552 14.6542 11.4342 13.9751 11.4342 13.1375C11.4342 12.2999 10.7552 11.6208 9.91755 11.6208C9.07991 11.6208 8.40088 12.2999 8.40088 13.1375C8.40088 13.9751 9.07991 14.6542 9.91755 14.6542Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  rx="12"
                  fill="white"
                  fill-opacity="0.9"
                />
                <path
                  d="M10.2503 17.8333H13.7503C16.667 17.8333 17.8337 16.6667 17.8337 13.75V10.25C17.8337 7.33332 16.667 6.16666 13.7503 6.16666H10.2503C7.33366 6.16666 6.16699 7.33332 6.16699 10.25V13.75C6.16699 16.6667 7.33366 17.8333 10.2503 17.8333Z"
                  stroke="#BE185D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.082 15.7917V13.5167"
                  stroke="#BE185D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.082 9.34584V8.20834"
                  stroke="#BE185D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0821 12.3792C14.9197 12.3792 15.5988 11.7001 15.5988 10.8625C15.5988 10.0249 14.9197 9.34583 14.0821 9.34583C13.2445 9.34583 12.5654 10.0249 12.5654 10.8625C12.5654 11.7001 13.2445 12.3792 14.0821 12.3792Z"
                  stroke="#BE185D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.91797 15.7917V14.6542"
                  stroke="#BE185D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.91797 10.4833V8.20834"
                  stroke="#BE185D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.91706 14.6542C10.7547 14.6542 11.4337 13.9751 11.4337 13.1375C11.4337 12.2999 10.7547 11.6208 9.91706 11.6208C9.07943 11.6208 8.40039 12.2999 8.40039 13.1375C8.40039 13.9751 9.07943 14.6542 9.91706 14.6542Z"
                  stroke="#BE185D"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </button>
          {showControls2 && (
            <div className="brightness-contrast-controls">
              <div className="brightness-control">
                <label>Brightness</label>
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  value={brightness2}
                  onChange={handleBrightnessChange2}
                />
              </div>
              <div className="contrast-control">
                <label>Contrast</label>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={contrast2}
                  onChange={handleContrastChange2}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageControl;
