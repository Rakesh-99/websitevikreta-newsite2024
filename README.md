   <div className="flex flex-col gap-2" key={idx}>

                        <div className="flex  relative items-center md:flex-col">
                          <div className="flex  flex-1 flex-wrap items-center gap-[21px] md:self-stretch">
                            <Heading size="headingmd" as="h5">
                              {val.username}

                              <Text size="texts" as="p" className="">
                                {date}
                              </Text>
                            </Heading>

                          </div>
                          <div className="flex w-[42%] justify-center gap-2 self-end md:w-full md:self-auto">

                             <div
                              onClick={() => toggleInputBox(val._id)}
                              className="flex  items-center cursor-pointer justify-end gap-[9px]">
                              <ReplyAll
                                width={18}
                                height={20}
                                alt="Question Icon"
                                className="h-[20px]"
                              />
                              <Text size="texts" as="p" className="!text-colors1">
                                Reply
                              </Text>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <Text as="p" className="leading-[22px]">
                            {val.commentbox}
                          </Text>
                          {/* Reply-comment  */}

                          {
                            val.commentReplies?.map((replyComment, idx) => {
                              return (
                                <div className="ml-3" key={idx}>
                                  <h3 className="text-yellow-400 font-[500] text-lg">{replyComment.username}</h3>
                                  <Text >{replyComment.comment}</Text>
                                </div>
                              )
                            })
                          }
                        </div>


                        {/* Show input box if the reply is clicked */}



                        {/* Reply comment  */}
                        {
                          showInputBox[val._id] &&
                          <div className="ml-2">

                            <form action="" onSubmit={(e) => replyCommentFormHandler(e, val._id)}>
                              <Input
                                required
                                onChange={replyInputHandle}
                                value={replyCommentData}
                                type="text"
                                name="replycomment"
                                placeholder={`Reply`}
                                className="w-96  px-2 py-2 rounded-sm "
                              />

                              <Button
                                type='submit'
                                size="lg"
                                shape="square"
                                className="min-w-[152px] mt-5 font-bold text-yellow-400"
                              >
                                Submit
                              </Button>
                            </form>

                          </div>
                        }

                      </div>
