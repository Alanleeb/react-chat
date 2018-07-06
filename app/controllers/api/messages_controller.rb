class Api::MessagesController < ApplicationController
  def create
<<<<<<< HEAD
  end
end
=======
    MessageBus.publish "/chat_channel", { email: params[:email], body: params[:body] }
  end
end

>>>>>>> chat update
