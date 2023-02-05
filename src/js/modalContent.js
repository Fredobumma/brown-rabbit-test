export function modalContent(id, src, content) {
  return `<div
  class="modal fade"
  id="${id}"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
  data-bs-toggle="modal"
  aria-label="Close"
>
  <div class="modal-dialog m-0 mx-auto my-sm-5">
    <div class="modal-content border-0">
      <div class="modal-header d-block p-0 position-relative">
        <picture >
          <source src="${src}" type="image/png" />
          <img
            class="w-100 w-sm-none modal__picture"
            src="${src}"
            alt=""
            srcset=""
          />
        </picture>
        <span
        class="menu d-inline-flex justify-content-center bottom-0 end-xs-0 end-lg-unset top-0 bg-black mh-fit mw-fit p-4 position-absolute"
        data-bs-toggle="modal"
        aria-label="Close"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            id="close"
            d="M2091.2,9.9l-9.9,9.9,9.9-9.9L2081.3,0l9.9,9.9,9.9-9.9-9.9,9.9,9.9,9.9Z"
            transform="translate(-2080.594 0.707)"
            fill="none"
            stroke="#fff"
            stroke-width="2"
          />
        </svg>
      </span>
      </div>
      <div class="modal-body px-xxs-3rem px-xs-3rem px-md-7rem">
        <h2 class="article heading fw-normal mb-3 mt-5 mt-sm-0">
          ${content[0].innerText}
        </h2>
        <p class="opacity-65 text-small">${content[1].innerText}</p>
        <p class="mb-2rem mt-2rem default-text">
          ${content[2].innerText}
        </p>
      </div>
    </div>
  </div>
</div>`;
}
