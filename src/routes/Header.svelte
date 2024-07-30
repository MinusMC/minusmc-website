<script>
  import "../app.pcss";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import { Heading, P, Button } from 'flowbite-svelte';
  import { base } from '$app/paths';
</script>

<header class="top-0 z-40 flex-none mx-auto border-b border-gray-300 dark:border-gray-600 px-6">
  <Navbar color="none" fluid>
    <NavBrand href="{base}/">
      <div class="flex flex-col">
        <span class="py-0 text-2xl font-medium text-gray-500 hover:text-gray-800 transition duration-300 ease-out hover:ease-in">MinusMC</span>
      </div>
    </NavBrand>

    <NavHamburger class="text-gray-500 md:block lg:hidden"/>

    <NavUl divClass="lg:block w-full lg:w-auto order-2 lg:order-none" ulClass="flex flex-col py-3 my-4 lg:flex-row lg:my-0 text-lg font-medium gap-6 md:px-4">
      <NavLi class="text-gray-400 hover:text-gray-900 transition duration-300 ease-out hover:ease-in" href="{base}/#about">About</NavLi>
      <NavLi class="text-gray-400 hover:text-gray-900 transition duration-300 ease-out hover:ease-in" href="{base}/#products">Products</NavLi>
      <NavLi class="text-gray-400 hover:text-gray-900 transition duration-300 ease-out hover:ease-in" href="{base}/#contact">Contact</NavLi>
    </NavUl>
  </Navbar>
</header>