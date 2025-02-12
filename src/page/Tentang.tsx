import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export function TentangFormasi() {
  return (
    <div className="container">
    <Accordion>
      <AccordionPanel>
        <AccordionTitle>Apa itu FORMASI?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-white-500 dark:text-white-400">
            FORMASI adalah organisasi kemasyarakatan yang didirikan oleh para perantau asli desa Tanggungsari kecamatan ketanggungan kabupaten brebes yang berada di Lampung.
          </p>
          <p className="text-white-500 dark:text-white-400">
            cek tentang FORMASI di &nbsp;
            <a
              href="https://formasi52263.blogspot.com"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Situs FORMASI&nbsp;
            </a>
            Silahkan pelajari tentang apa yang ada di situs tersebut.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>Apa syarat gabung menjadi anggota FORMASI?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-white-500 dark:text-white-400">
          Tidak ada syarat khusus untuk gabung di FORMASI.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>Apa keuntungan gabung di FORMASI?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-white-500 dark:text-white-400">
          Keuntungan gabung di FORMASI tentunnya semakin menambah teman-teman baru dan jika ada kesulitan-kesulitan bisa coba dibantu oleh anggota yang lainnya.
          </p>
          </AccordionContent>
      </AccordionPanel>
    </Accordion>
    </div>
  );
}
