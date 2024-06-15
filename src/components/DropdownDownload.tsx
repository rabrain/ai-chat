'use client';

// Ref: https://github.com/janhq/docs/blob/main/src/components/DropdownDownload/index.tsx#L114
import { Button, ButtonGroup } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";

import { useRelease } from '@/lib/release-provider';
import { Link } from '@nextui-org/link';
import { ChevronDownIcon } from './icons/ChevronDownIcon';


const DropdownDownload = () => {
  const release = useRelease()
  const systems = release.systems
  const defaultSystem = release.current ?? systems[0]

  return (
    <ButtonGroup variant="flat">
      <Button
        href={defaultSystem.href || release.url}
        as={Link}
        color="primary"
        variant="solid"
        size='lg'
        startContent={
          <defaultSystem.logo className='w-6' />
        }
      // showAnchorIcon
      >
        {defaultSystem.name}
      </Button>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button isIconOnly color='primary' variant='solid' size='lg' aria-label="Download options">
            <ChevronDownIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          // disallowEmptySelection
          aria-label="Download options"
          // selectionMode="single"
          color="primary"
          variant="solid"
        >
          {systems.map((system) => (
            <DropdownItem
              key={system.name}
              startContent={<system.logo className="w-6" />}
              textValue={system.name}
            >
              <Link color='foreground' href={system.href || ''}>
                {system.name}
              </Link>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  )
}

export default DropdownDownload
