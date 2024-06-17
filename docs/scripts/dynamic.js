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
                              <a class="relative block py-2 transition font-bold hover:text-amber-500 dark:hover:text-amber-400" href="/about">About</a>
                            </li>
                            <li>
                              <a class="relative block py-2 transition font-bold hover:text-amber-500 dark:hover:text-amber-400" href="/experience">Experience</a>
                            </li>
                            <li>
                              <a class="relative block py-2 transition font-bold hover:text-amber-500 dark:hover:text-amber-400" href="/projects">Projects</a>
                            </li>
                            <li>
                              <a
                                class="relative flex items-center gap-1 py-2 transition font-bold text-blue-600 hover:text-blue-700 dark:text-blue-600 dark:hover:text-blue-500"
                                target="_blank"
                                href="https://internalnote.com?utm_source=verschoren.com"
                              >
                                <img alt="internalnote logo" src="/images/logos/internalnote_small.svg" width="512" height="512" decoding="async" data-nimg="1" class="h-6 w-6" loading="lazy" style="color: transparent" />
                                <span>Internal&nbsp;Note</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div class="justify-center sm:justify-start lg:justify-end flex-1 gap-4 flex">
                        <a href="https://github.com/verschoren" class="text-gray-400 hover:text-gray-500">
                          <span class="sr-only">GitHub</span>
                          <svg class="h-6 w-6 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              fill-rule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
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
                        <a class="transition hover:text-yellow-500 dark:hover:text-yellow-400" href="/privacy">Privacy</a>
                        <a class="transition hover:text-yellow-500 dark:hover:text-yellow-400" href="/values">Values</a>
                      </div>
                    </div>
                    <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                      <p class="text-sm text-zinc-400 dark:text-zinc-500">
                        © 2012 -
                        <!-- -->
                        2024
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
              link.classList.add('text-amber-500', 'dark:text-amber-400');
          }
      });
});