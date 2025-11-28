document.addEventListener('DOMContentLoaded', function() {
    // Create a new header element
    const header = document.createElement('header');
    const footer = document.createElement('footer');

    header.innerHTML = `
    <header class="relative z-50 flex flex-col" style="height: var(--header-height); margin-bottom: var(--header-mb)">
          <div class="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
          <div class="sm:px-8 top-0 order-last -mb-3 pt-3" style="position: var(--header-position)">
            <div class="mx-auto max-w-7xl lg:px-8">
              <div class="relative px-4 sm:px-8 lg:px-12">
                <div class="mx-auto max-w-2xl lg:max-w-5xl">
                  <div class="top-[var(--avatar-top,theme(spacing.3))] w-full" style="position: var(--header-inner-position)"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="top-0 z-10 h-16 pt-6" style="position: var(--header-position)">
            <div class="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full" style="position: var(--header-inner-position)">
              <div class="mx-auto max-w-7xl lg:px-8">
                <div class="relative px-4 sm:px-8 lg:px-12">
                  <div class="mx-auto max-w-2xl lg:max-w-5xl">
                    <div class="relative md:flex gap-4 items-center">
                      <div class="justify-center sm:justify-start flex flex-1 -ml-2">
                        <a aria-label="Home" class="pointer-events-auto" href="/">
                          <img alt="" src="/images/logotext.svg" width="2425" height="512" decoding="async" data-nimg="1" class="dark:hidden h-9 w-auto" style="color: transparent" />
                          <img alt="" src="/images/logotext_dark.svg" width="2425" height="512" decoding="async" data-nimg="1" class="hidden dark:block h-9 w-auto" style="color: transparent" />
                        </a>
                      </div>
                      <div class="flex flex-1 justify-center sm:justify-start lg:justify-center">
                        <nav class="pointer-events-auto md:block">
                          <ul class="gap-4 first-letter:justify-center w-full flex rounded-full text-sm font-medium text-zinc-800 dark:text-zinc-200">
                            <li>
                              <a class="relative block py-2 transition font-bold hover:text-orange-500 dark:hover:text-orange-500" href="/about">About</a>
                            </li>
                            <li>
                              <a class="relative block py-2 transition font-bold hover:text-orange-500 dark:hover:text-orange-500" href="/work">Work</a>
                            </li>                    
                            <li>
                              <a class="relative block py-2 transition font-bold hover:text-orange-500 dark:hover:text-orange-500" href="/favorites">Favorites</a>
                            </li>                    
                          </ul>
                        </nav>
                      </div>
                      <div class="justify-center sm:justify-start lg:justify-end flex-1 gap-4 flex">
                        <a href="https://www.linkedin.com/in/thomasverschoren/" class="text-gray-400 hover:text-gray-500">
                          <span class="sr-only">LinkedIn</span>
                          <svg class="h-6 w-6 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
                           ></path>
                          </svg>
                        </a>
                        <a href="mailto:thomas@verschoren.com" class="text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Mail</span>
                          <svg class="h-6 w-6 transition group-hover:fill-zinc-900 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                          </svg>
                        </a>
                        <a href="https://internalnote.com" class="text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Mail</span>
<svg class="h-6 w-6 transition group-hover:fill-zinc-900 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" width="512px" height="512px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="internalnote_black-apple" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group" transform="translate(50.000000, 91.000000)" fill="currentColor" fill-rule="nonzero">
            <g id="Path" transform="translate(0.000000, -0.000000)">
                <path d="M42.8923444,237.888494 C42.8923444,264.992274 64.9052444,287.010649 91.9888667,287.010649 L321.011133,287.010649 C348.071811,287.010649 370.084711,264.992274 370.084711,237.888494 L370.084711,92.1023178 C370.084711,64.9985383 348.071811,42.9571936 321.011133,42.9571936 L91.9888667,42.9571936 C64.9052444,42.9571936 42.8923444,64.9985383 42.8923444,92.1023178 C42.8923444,92.1023178 42.8923444,121.356024 42.8923444,142.460221 C65.1714,142.460221 139.167233,142.460221 180.889411,142.460221 L180.889411,103.600752 L285.295811,163.968678 L180.884822,224.244728 L180.884822,185.422009 L0,185.422009 L0,92.1023178 C0,41.3217791 41.2632889,0 91.9888667,0 L321.011133,0 C371.722944,0 413,41.3217791 413,92.1023178 L413,237.888494 C413,288.664439 371.722944,330 321.011133,330 L91.9888667,330 C41.2632889,330 0,288.664439 0,237.888494 L42.8923444,237.888494 Z"></path>
            </g>
        </g>
    </g>
</svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    `
    footer.innerHTML = `
    <footer class="mt-32">
          <div class="sm:px-8">
            <div class="mx-auto max-w-7xl lg:px-8">
              <div class="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
                <div class="relative px-4 sm:px-8 lg:px-12">
                  <div class="mx-auto max-w-2xl lg:max-w-5xl">
                    <div class="flex flex-col items-center justify-between gap-6 sm:flex-row mb-4">
                      <div class="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        <a class="transition hover:text-orange-500 dark:hover:text-orange-500" href="/privacy">Privacy</a>
                        <a class="transition hover:text-orange-500 dark:hover:text-orange-500" href="/values">Values</a>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                      <p class="text-sm text-zinc-400 dark:text-zinc-500">
                        © 2012 -
                        <!-- -->
                        2025
                        <!-- -->
                        Thomas Verschoren. All rights reserved.
                      </p>
                      <p class="text-sm text-zinc-400 dark:text-zinc-500">Here’s to the crazy ones</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    `;

    // Find the main element
    const mainElement = document.querySelector('main');

    // Insert the header before the main element
    if (mainElement) {
        mainElement.parentNode.insertBefore(header, mainElement);
        mainElement.parentNode.insertBefore(footer, mainElement.nextSibling);
    } else {
        // If main element is not found, insert at the beginning of the body
        document.body.insertBefore(header, document.body.firstChild);
        document.body.appendChild(footer);
    }

    const currentPath = document.location.pathname;
    const navLinks = document.querySelectorAll('.transition.font-bold');

        // Iterate over each link to check if it matches the current path
        navLinks.forEach(link => {
          // Get the href attribute of the link
          const href = link.getAttribute('href');
  
          // Compare the href with the current path
          if (currentPath.includes(href)) {
            // Set text color to amber-500 for the matched link
              link.classList.add('text-orange-500', 'dark:text-orange-500');
          }
      });
});