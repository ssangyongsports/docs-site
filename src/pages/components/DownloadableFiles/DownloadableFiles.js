import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import Dropdown from "./Dropdown";

const downloadableFiles = [
  {
    title: "Zowe documentation",
    description: (
      <>
        Download the <code>Version 1.x.x</code> Zowe documentation in PDF format
        from the links below. The latest version on this website is
      </>
    ),
    firstSubDescription: <>Select the version to Download</>,
    firstDownloadLink: "https://google.com/",
    version: true,
    dropdown: true,
  },
  {
    title: "Zowe CLI command reference guides",
    description: (
      <>
        View documentation on commands, actions, and options in Zowe CLI. The
        reference document is based on the <code>@zowe-v1-lts</code> version of
        the CLI.
      </>
    ),
    firstSubDescription: <>Online interactive version</>,
    firstViewOnlineLink: "https://google.com/",
    firstDownloadLink: "https://google.com/",
    secondSubDescription: <>PDF document</>,
    secondDownloadLink: "https://google.com/",
  },
  {
    title: "Zowe Client SDK reference guides",
    description: (
      <>
        Refer to the following Zowe Client SDK reference guides for information
        about the API endpoints.
      </>
    ),
    firstSubDescription: <>Node SDK Reference</>,
    firstViewOnlineLink: "https://google.com/",
    firstDownloadLink: "https://google.com/",
    secondSubDescription: <>Python SDK Reference</>,
    secondViewOnlineLink: "https://google.com/",
    secondDownloadLink: "https://google.com/",
  },
];

function DownloadableFile({
  title,
  version,
  dropdown,
  description,
  firstSubDescription,
  firstViewOnlineLink,
  firstDownloadLink,
  secondSubDescription,
  secondViewOnlineLink,
  secondDownloadLink,
}) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx("col col--4 margin-bottom--lg")}>
      <div className={clsx("padding--lg", styles.card)}>
        <div className={styles.metadata}>
          <h3>{title}</h3>
          <p>
            {description}{" "}
            {version && siteConfig.customFields.latestVersion + "."}
          </p>
        </div>
        <div>
          <div>
            {firstSubDescription && (
              <p className="margin-bottom--sm">{firstSubDescription}</p>
            )}
            <div className="display-flex">
              {firstViewOnlineLink && (
                <div className="margin-right--md display-flex row--align-center pointer">
                  <img
                    className="lightTheme"
                    alt="Right arrow icon"
                    src={useBaseUrl("/img/right-arrow-light-icon.svg")}
                  />
                  <img
                    className="darkTheme"
                    alt="Right arrow icon"
                    src={useBaseUrl("/img/right-arrow-dark-icon.svg")}
                  />
                  <a
                    className="margin-left--xs"
                    href={firstViewOnlineLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View online
                  </a>
                </div>
              )}
              {dropdown && <Dropdown />}
              {firstDownloadLink && (
                <div className="display-flex row--align-center pointer">
                  <img
                    className="lightTheme"
                    alt="Download icon"
                    src={useBaseUrl("/img/download-light-icon.svg")}
                  />
                  <img
                    className="darkTheme"
                    alt="Download icon"
                    src={useBaseUrl("/img/download-dark-icon.svg")}
                  />
                  <a
                    className="margin--xs"
                    href={firstDownloadLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Download
                  </a>
                </div>
              )}
            </div>
          </div>
          <div>
            {secondSubDescription && (
              <p className="padding-top--lg margin-bottom--sm">
                {secondSubDescription}
              </p>
            )}
            <div className="display-flex">
              {secondViewOnlineLink && (
                <div className="margin-right--md display-flex row--align-center pointer">
                  <img
                    className="lightTheme"
                    alt="Right arrow icon"
                    src={useBaseUrl("/img/right-arrow-light-icon.svg")}
                  />
                  <img
                    className="darkTheme"
                    alt="Right arrow icon"
                    src={useBaseUrl("/img/right-arrow-dark-icon.svg")}
                  />
                  <a
                    className="margin-left--xs"
                    href={secondViewOnlineLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View online
                  </a>
                </div>
              )}
              {secondDownloadLink && (
                <div className="display-flex row--align-center pointer">
                  <img
                    className="lightTheme"
                    alt="Download icon"
                    src={useBaseUrl("/img/download-light-icon.svg")}
                  />
                  <img
                    className="darkTheme"
                    alt="Download icon"
                    src={useBaseUrl("/img/download-dark-icon.svg")}
                  />
                  <a
                    className="margin--xs"
                    href={secondDownloadLink}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Download
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DownloadableFiles() {
  return (
    <>
      {downloadableFiles && downloadableFiles.length > 0 && (
        <div className={clsx("home-container", styles.section)}>
          <div className="row margin-horiz--lg">
            <div className={clsx("col col--2 p-none")}>
              <h3 className="padding-top--lg container-h3">
                Downloadble files
              </h3>
            </div>
            <div className={clsx("col col--10 p-none")}>
              <div className={clsx("row")}>
                {downloadableFiles.map((props, idx) => (
                  <DownloadableFile key={idx} {...props} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DownloadableFiles;