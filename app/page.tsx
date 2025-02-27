'use client'

import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Card from "./components/Card/Card";
import { CardapioSection } from "@/@types";
import { useEffect, useState } from "react";
import { EnvironmentVarsSchema, LoadRelativeEnvVars } from "@/lib/utils";
import dotenv from "dotenv";

dotenv.config()

export default function Home() {

  const [data, setData] = useState<CardapioSection[]>([])
  const [loadEnv, setLoadEnv] = useState<EnvironmentVarsSchema>()

  useEffect(() => {
    async function fetchData() {
      console.log(process.env.INTERNAL_KEY)
      return (await fetch('/api/cardapio/items', {
        method: 'GET',
        headers: {
          'x-internal-key': `${process.env.INTERNAL_KEY}`
        }
      })).json()
    }

    setLoadEnv(LoadRelativeEnvVars())
    fetchData().then(data => setData(data || []))
  }, [])

  return (
    <>
      <Header.root>
        <Header.image className="object-cover h-[12rem] w-full" src="./banner.png" />
        <Header.title>
          {loadEnv?._App_Header_Title_}
        </Header.title>
        <Header.subtitle>
          {loadEnv?._App_Header_Subtitle_}
        </Header.subtitle>
      </Header.root>

      {
        Array.isArray(data) && data.map((section) => {
          return (
            <div key={section.sectionName} className="mx-auto p-4">
              <Section.title title={section.sectionName} />
              <Section.root>
                {
                  section.items.map((item, i) => {
                    return (
                      <Card.root id={section.sectionName + i} key={section.sectionName + i}>
                        <Card.image className="w-full h-20 sm:h-24 object-cover" height={100} width={200} src="https://storage.googleapis.com/a1aa/image/6GvcfWS7kZSYUSQjtmv2B4wIS9nf6rjqqn12JTKluRABF77TA.jpg" />
                        <Card.content className="flex flex-col p-2 justify-between">
                          <Card.title title={item.name} />
                          <Card.description content={item.description} />
                          {
                            section.sectionName === 'PORÇÕES' ? (

                              <div className="flex gap-4 text-black">
                                {
                                  item.pequena && (
                                    <span>
                                      Pequena: <Card.price price={item.pequena || ''} />
                                    </span>

                                  )
                                }

                                {
                                  item.grande && (
                                    <span>
                                      Grande: <Card.price price={item.grande || ''} />
                                    </span>
                                  )
                                }
                              </div>
                            ) : (
                              <Card.price price={item.price || 'Preço sob consulta'} />
                            )
                          }
                        </Card.content>
                      </Card.root>
                    )
                  })
                }
              </Section.root>
            </div>
          )
        })
      }
    </>
  );
}
